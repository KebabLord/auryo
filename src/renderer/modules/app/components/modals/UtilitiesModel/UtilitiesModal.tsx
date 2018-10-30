import cn from 'classnames';
import * as React from 'react';
import { Modal, ModalBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { connectModal, IModalInjectedProps } from 'redux-modal';
import AboutTab from './about/AboutTab';
import SettingsTab from './settings/SettingsTab';
import { connect } from 'react-redux';
import { StoreState } from '../../../../../../common/store';
import { RemainingPlays } from '../../../../../../common/store/app';

interface PassedProps {
    activeTab?: TabType;
}

interface PropsFromState {
    remainingPlays: RemainingPlays | null;
}

interface State {
    activeTab: TabType;
}

enum TabType {
    ABOUT = 'about',
    SETTINGS = 'settings'
}

type Props = PropsFromState & PassedProps & IModalInjectedProps;

class UtilitiesModal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            activeTab: props.activeTab || TabType.ABOUT
        };
    }

    // getDerivedStateFromProps(props: Props, state: State) {
    //     if(props.activeTab)
    // }

    toggle = (tab: TabType) => {
        const { activeTab } = this.state;

        if (activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { show, handleHide, remainingPlays } = this.props;
        const { activeTab } = this.state;

        return (
            <Modal isOpen={show} toggle={handleHide} className='utilities'>
                <ModalBody>
                    <div className='close'>
                        <a href='javascript:void(0)' onClick={handleHide}><i className='icon-close' /></a>
                    </div>
                    <Nav tabs={true}>
                        <NavItem>
                            <NavLink
                                className={cn({ active: activeTab === TabType.ABOUT })}
                                onClick={() => {
                                    this.toggle(TabType.ABOUT);
                                }}
                            >
                                <i className='icon-info' />
                                <div>About</div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={cn({ active: activeTab === TabType.SETTINGS })}
                                onClick={() => {
                                    this.toggle(TabType.SETTINGS);
                                }}
                            >
                                <i className='icon-cog' />
                                <div>Settings</div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId='about'>
                            <AboutTab
                                remainingPlays={remainingPlays}
                            />
                        </TabPane>
                        <TabPane tabId='settings'>
                            <SettingsTab {...this.props} />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        );
    }
}

const mapStateToProps = ({ app }: StoreState): PropsFromState => ({
    remainingPlays: app.remainingPlays
});

export default connect(mapStateToProps)(connectModal<PassedProps>({ name: 'utilities' })(UtilitiesModal as any));
