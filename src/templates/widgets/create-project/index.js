import getAllCategories from "./slider";
import Metal from "./models/metal-working/metalWorking";
import Model3D from "./models/3d-model";
import Industrial from "./models/industrial";
import ReverseEngineer from "./models/reverse-engineering/reverseEnginee";
import CncIsleme from "./models/cnc";

class CreateProject {
  constructor() {
    getAllCategories();
    new Metal();
    new Model3D();
    new Industrial();
    new ReverseEngineer();
    new CncIsleme();
  }
}

export default CreateProject;
