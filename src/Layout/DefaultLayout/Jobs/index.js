import { Container, Button } from "react-bootstrap";

import Job from "~/components/Job";

function Jobs({ jobList }) {
  return (
    <Container>
      {jobList && jobList.map((job, i) => <Job key={i} jobInfo={job}></Job>)}
    </Container>
  );
}

export default Jobs;
