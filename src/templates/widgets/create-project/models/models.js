class Categories {
    constructor(dataType, dataName, dataDesc, dataSubText){
        this.type = dataType;
        this.name = dataName;
        this.desc = dataDesc;
        this.subText = dataSubText;
    }

    init(){
        return this.type + this.name + this.desc + this.subText;
    }
};

export default Categories;