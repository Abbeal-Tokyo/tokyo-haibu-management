import { getApiDocs } from "./swagger-spec";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const IndexPage = async () => {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <SwaggerUI spec={spec} />
    </section>
  );
};

export default IndexPage;
