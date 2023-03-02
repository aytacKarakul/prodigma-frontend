import getAllCategories from "./slider";
import Metal from "./models/metal-working/metalWorking";
import Model3D from "./models/3d-model";
import Industrial from "./models/industrial";

class CreateProject {
  constructor() {
    getAllCategories();
    new Metal();
    new Model3D();
    new Industrial();
  }
}

export default CreateProject;
