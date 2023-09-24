import logFirstImplementation from "./firstUse.js";
import logSecondImplementation from "./secondUse.js";

logFirstImplementation();
logSecondImplementation();

/*
 Problem: while executing both the function, separate instance of class FancyLogger is being created hence line 6 in both the files giving 0 as new instance is getting created, so initialised with 0


 To fix this problem: Use Singleton Pattern

 Otherwise:
 -  Yes we can fix this - if we put both the func in this same file and use
      const logger = new FancyLogger();
    this instance globally from the top level, but this method is not scalable
*/
