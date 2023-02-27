import getAllCategories from "./slider";
import customViewer from "./models/viewer";
import Metal from "./models/metal-working/metalWorking";
import Silicon from "./models/3d-model";

class CreateProject {
  constructor() {
    getAllCategories();
    customViewer();
    new Metal();
    new Silicon();
  }
}

export default CreateProject;
