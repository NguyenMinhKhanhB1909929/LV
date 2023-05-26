import { useEffect } from "react";

import { Link } from "react-router-dom";
import routesConfig from "~/config/routes";
import { Button } from "react-bootstrap";

import ControlledCarousel from "~/Layout/DefaultLayout/Carousel";
import Jobs from "~/Layout/DefaultLayout/Jobs";
import { handleGetJob } from "~/service/jobService";
import { useDispatch, useSelector } from "react-redux";
import { getJobSuccess } from "~/store/actions/jobAction";
import { jobSelector } from "~/config/selectors";
import TopJob from "~/Layout/DefaultLayout/TopJob";

function Home() {
  const dispatch = useDispatch();
  const jobData = useSelector(jobSelector).jobList;

  const fetchData = async () => {
    const result = await handleGetJob();
    if (result.success) {
      dispatch(getJobSuccess(result.jobs));
    }
  };
  useEffect(() => fetchData, []);

  return (
    <div>
      <ControlledCarousel></ControlledCarousel>
      <h1 className="text-center my-4 p-3">Các công việc được quan tâm nhất</h1>
      <Jobs jobList={jobData}></Jobs>
      <div className="text-center mt-4">
        <Link to={routesConfig.allJob}>
          <Button style={{ backgroundColor: "#2db964" }}>
            Xem tất cả công việc
          </Button>
        </Link>
      </div>
      <div className="mt-5">
        <h1 className="text-center my-4 p-3">Công việc được thuê nhiều nhất</h1>

        <TopJob></TopJob>
      </div>
    </div>
  );
}

export default Home;
