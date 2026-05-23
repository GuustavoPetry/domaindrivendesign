import { expect, test } from "vitest";
import { Student } from "./student";
import { UniqueEntityID } from "../../core/unique-entity-id";

test("create a student object", () => {
    const student = Student.create({
        name: "Gustavo Petry",
    }, new UniqueEntityID("ID"));

    expect(student).toEqual(
        expect.objectContaining({
            name: "Gustavo Petry",
            id: {
                value: "ID",
            }
        })
    );
});
