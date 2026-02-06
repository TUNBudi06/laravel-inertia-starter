import HomeController from './HomeController'
import AboutController from './AboutController'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
AboutController: Object.assign(AboutController, AboutController),
}

export default Controllers