import getAllCategories from "./slider";
import Metal from "./models/metal-working/metalWorking";
import Model3D from "./models/3d-model";

class CreateProject {
  constructor() {
    getAllCategories();
    new Metal();
    //new Model3D();
  }
}

export default CreateProject;
