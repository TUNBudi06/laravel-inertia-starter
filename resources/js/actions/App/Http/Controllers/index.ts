import Auth from './Auth'
import DashboardController from './DashboardController'
import MemberController from './MemberController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
DashboardController: Object.assign(DashboardController, DashboardController),
MemberController: Object.assign(MemberController, MemberController),
}

export default Controllers