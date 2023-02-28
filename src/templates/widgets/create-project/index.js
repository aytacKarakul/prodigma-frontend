import getAllCategories from "./slider";
import customViewer from "./models/viewer";
import Metal from "./models/metal-working/metalWorking";
import Model3D from "./models/3d-model";

class CreateProject {
  constructor() {
    customViewer();
    getAllCategories();
    new Metal();
    new Model3D();
  }
}

export default CreateProject;
