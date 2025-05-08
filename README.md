Subject: Difference between “interfaces” and “types” in TypeScript
Interface: 
1. interface is ideal for defining object structures and is extendable.
2. This is better for OOP-like structures and public APIs.
Type or Type Aliases:
1.	type is more flexible; can represent primitives, unions, intersections, and more.
2.	This is better for complex types, unions, and aliases.
Interface Example:
interface Admin {
  name: string;
  permissions: string[];
}

type (for union) Example:
type UserRole = 'admin' | 'editor' | 'viewer';




Subject: union and intersection types in TypeScript
Union(|):
1.	A union symbol is (|)
2.	A variable can hold one of multiple types.
3.	We can think the union like as Union = OR
4.	Used for type safety, flexibility, and better code readability.
5.	Commonly used in function parameters, APIs, forms, and complex objects.
Union Example:
let value: string | number;

value = "Azad"; // 
value = 25;     // 
value = true;   //  Error: boolean not allowed
Intersection(&):
1.	An intersection symbol is (&)
2.	A variable must hold all of multiple types.
3.	We can think the intersection like as Intersection = AND.
4.	Used for type safety, flexibility, and better code readability.
5.	Commonly used in function parameters, APIs, forms, and complex objects.
Intersection Example:
type Employee = {
  name: string;
  id: number;
};

type Manager = {
  role: string;
};

type ManagerEmployee = Employee & Manager;

const boss: ManagerEmployee = {
  name: "Azad",
  id: 1,
  role: "Store Manager"
};




Subject: keyof keyword in TypeScript
Keyof:
1.	keyof is a TypeScript operator.
2.	It creates a union of property names (keys) from an object type.
3.	Useful for type-safe operations, like creating forms, dropdowns, or dynamic UI from object models.
4.	Often combined with generics, typeof, and indexed access types.


Keyof Example:
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// Result: "name" | "age"




