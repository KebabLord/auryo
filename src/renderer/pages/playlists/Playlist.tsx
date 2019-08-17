import { StoreState } from "@common/store";
import { getAuthAllPlaylistsIfNeeded, getAuthLikesIfNeeded, getAuthTracksIfNeeded } from "@common/store/auth";
import { canFetchMoreOf, fetchChartsIfNeeded, fetchMore, ObjectTypes, PlaylistTypes } from "@common/store/objects";
import { getPlaylistObjectSelector } from "@common/store/objects/selectors";
import { SortTypes } from "@common/store/playlist/types";
import { SetLayoutSettings } from "@renderer/_shared/context/contentContext";
import debounce = require("lodash/debounce");
import * as React from "react";
import * as isDeepEqual from "react-fast-compare";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import PageHeader from "../../_shared/PageHeader/PageHeader";
import Spinner from "../../_shared/Spinner/Spinner";
import TracksGrid from "../../_shared/TracksGrid/TracksGrid";

interface OwnProps {
    objectId: string;
    title: string;
    backgroundImage?: string;
    gradient?: string;
    sortType?: SortTypes;
    showInfo?: boolean;
    chart?: boolean;
    sortTypeChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
}

type PropsFromState = ReturnType<typeof mapStateToProps>;

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

type AllProps = OwnProps & PropsFromState & PropsFromDispatch & RouteComponentProps;

class Playlist extends React.Component<AllProps> {

    public static defaultProps: Partial<AllProps> = {
        showInfo: false,
        chart: false
    };

    private readonly debouncedFetchMore: () => Promise<void>;

    constructor(props: AllProps) {
        super(props);

        this.debouncedFetchMore = debounce(() => props.fetchMore(props.objectId, ObjectTypes.PLAYLISTS) as any, 500)
    }

    public componentDidMount() {
        this.fetchPlaylist();
    }

    public shouldComponentUpdate(nextProps: AllProps) {

        if (
            !isDeepEqual(nextProps, this.props)
        ) {
            return true;
        }

        return false;
    }

    public componentDidUpdate() {
        this.fetchPlaylist();
    }

    public fetchPlaylist = () => {
        const {
            playlistObject,
            chart,
            fetchChartsIfNeeded,
            sortType,
            fetchMore,
            objectId,
            getAuthLikesIfNeeded,
            getAuthTracksIfNeeded,
            getAuthAllPlaylistsIfNeeded
        } = this.props;

        if (!playlistObject) {

            if (chart) {
                fetchChartsIfNeeded(objectId, sortType);
            } else {
                switch (objectId) {
                    case PlaylistTypes.LIKES:
                        getAuthLikesIfNeeded();
                        break;
                    case PlaylistTypes.MYTRACKS:
                        getAuthTracksIfNeeded();
                        break;
                    case PlaylistTypes.PLAYLISTS:
                        getAuthAllPlaylistsIfNeeded();
                        break;
                    default:
                }
            }

        } else if (!playlistObject || playlistObject.items.length === 0 && (playlistObject && !playlistObject.isFetching)) {
            fetchMore(objectId, ObjectTypes.PLAYLISTS);
        }
    }

    public renderChartSort = () => {
        const {
            sortTypeChange,
            sortType,
        } = this.props;

        return (
            <div className="float-right">
                <div className="bp3-select bp3-minimal">
                    <select
                        defaultValue={sortType}
                        value={sortType}
                        onBlur={sortTypeChange}
                    >
                        <option value={SortTypes.TOP} role="option" aria-selected={false}>{SortTypes.TOP}</option>
                        <option value={SortTypes.TRENDING} role="option" aria-selected={false}>{SortTypes.TRENDING}</option>
                    </select>
                </div>
            </div>
        );
    }

    public render() {
        const {
            playlistObject,
            objectId,
            showInfo,
            title,
            chart,
            backgroundImage,
            gradient,
            canFetchMoreOf,
        } = this.props;

        if (!playlistObject || (playlistObject && playlistObject.items.length === 0 && playlistObject.isFetching)) {
            return <Spinner contained={true} />;
        }

        return (
            <>
                <SetLayoutSettings hasImage={!!backgroundImage} />
                <PageHeader
                    image={backgroundImage}
                    gradient={gradient}
                >
                    <>
                        {
                            chart && this.renderChartSort()
                        }
                        <h2>{title}</h2>
                    </>
                </PageHeader>

                {
                    (!playlistObject.items.length) ? (
                        <div className="pt-5 mt-5">
                            <h5 className="text-muted text-center">That's unfortunate, you don't seem to have any tracks in here</h5>
                            <div className="text-center" style={{ fontSize: "5rem" }}>
                                🧐
                                </div>
                        </div>
                    ) : (
                            <TracksGrid
                                items={playlistObject.items}
                                objectId={objectId}
                                showInfo={showInfo}
                                isItemLoaded={(index) => !!playlistObject.items[index]}
                                loadMore={() => this.debouncedFetchMore() as any}
                                isLoading={playlistObject.isFetching}
                                hasMore={canFetchMoreOf(objectId, ObjectTypes.PLAYLISTS) as any}
                            />
                        )
                }
            </>
        );
    }
}

const mapStateToProps = (state: StoreState, props: OwnProps) => {
    const { objectId } = props;

    return {
        playlistObject: getPlaylistObjectSelector(objectId)(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    fetchMore,
    fetchChartsIfNeeded,
    getAuthLikesIfNeeded,
    getAuthTracksIfNeeded,
    getAuthAllPlaylistsIfNeeded,
    canFetchMoreOf
}, dispatch);

export default connect<PropsFromState, PropsFromDispatch, OwnProps, StoreState>(mapStateToProps, mapDispatchToProps)(withRouter(Playlist));
