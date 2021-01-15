import Footer from './components/footer'
import Header from './components/header'
import { RouterConfig } from './RouteConfig';
import { GlobalCSS } from './style'
import store from './store'
import {
    Route,
    Switch,
    withRouter,
    BrowserRouter
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Provider } from 'react-redux';
import { GlobalIcon } from './static/iconfront/iconfont'
import React, { PureComponent } from 'react'

const DEFAULT_SCENE_CONFIG = {
    enter: 'from',
    exit: 'to'
};

const getSceneConfig = location => {
    const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;

const Routes = withRouter(({ location, history }) => {

    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = 'forward-' + getSceneConfig(location).enter;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = 'back-' + getSceneConfig(oldLocation).exit;
    }

    // 更新旧location
    oldLocation = location;

    return (
        <TransitionGroup
            className={'router-wrapper'}
            childFactory={child => React.cloneElement(child, { classNames })}
        >
            <CSSTransition timeout={500} key={location.pathname}>
                <Switch location={location}>
                    {RouterConfig.map((config, index) => (
                        <Route exact key={index} {...config} />
                    ))}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
});

class App extends PureComponent {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Footer />
                            <Routes />
                        </div>
                    </BrowserRouter>
                </Provider>
                <GlobalCSS />
                <GlobalIcon />
            </div>
        )
    }

}

export default App;


