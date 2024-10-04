// ******** An Overview Behind Garbage Collection *********

// The majority of memory management issues occur when we try to release the allocated memory. The main concern that arises is the determination of unused memory resources. In the case of low-level languages where the developer has to manually decide when the memory is no longer needed, high-level languages such as JavaScript use an automated form of memory management known as Garbage Collection(GC).


// ******** Garbage Collection *********

// The below section will explain the concepts that are necessary to understand the main garbage collection algorithms and their limitations. The main concept of the algorithms designed for garbage collection is the concept of reference. An object can have a reference to another object if the previous object has access to the latter. For example, a JavaScript object can have an implicit reference(when the reference is to its prototypes) and explicit( when the reference is to its properties values).