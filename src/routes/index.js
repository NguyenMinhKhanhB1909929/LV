import routesConfig from "~/config/routes";

import Home from "~/pages/Home";
import Recruitment from "~/pages/Recruitment";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
import Test from "~/pages/Test";
import PostJob from "~/pages/PostJob";
import ManagerFreeLancer from "~/pages/ManagerFreelancer/";
import ManagerFreelancer2 from "~/pages/ManagerFreelancer2/ManagerFreelancer2";
import ManagerClient from "~/pages/ManagerClient/";
import ManagerClient2 from "~/pages/ManagerClient2/";
import AllJob from "~/pages/AllJob";
import JobApply from "~/pages/JobApply";
import PartTimeJob from "~/pages/PartTimeJob";
import { AssignJob } from "~/pages/AssignJob";
import Evaluate from "~/pages/Evaluate/Evaluate";
import GetJob from "~/pages/GetJob/GetJob";
import ManagerFreeLancer4 from "~/pages/ManagerFreelancer4/ManagerFreelance4";
import ManagerUser from "~/pages/ManagerUser/ManagerUser";
import Chart from "~/pages/Chart/Chart";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: "/recruitment", component: Recruitment },
  { path: "/upload", component: Upload, layout: null },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.login, component: Login },
  { path: routesConfig.register, component: Register },
  { path: routesConfig.postJob, component: PostJob },
  { path: routesConfig.managerFreelancer, component: ManagerFreeLancer },
  {
    path: `${routesConfig.managerFreelancer}/2`,
    component: ManagerFreelancer2,
  },
  {
    path: `${routesConfig.managerFreelancer}/4`,
    component: ManagerFreeLancer4,
  },
  { path: routesConfig.managerClient, component: ManagerClient },
  { path: `${routesConfig.managerClient}/2`, component: ManagerClient2 },
  { path: routesConfig.assignJob, component: AssignJob },
  { path: routesConfig.allJob, component: AllJob },
  { path: routesConfig.partTimeJob, component: PartTimeJob },
  { path: routesConfig.job, component: JobApply },
  { path: routesConfig.evaluate, component: Evaluate },
  { path: routesConfig.getJob, component: GetJob },
  { path: routesConfig.managerUser, component: ManagerUser },
  { path: routesConfig.chart, component: Chart },
  {
    path: "/test",
    component: Test,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
