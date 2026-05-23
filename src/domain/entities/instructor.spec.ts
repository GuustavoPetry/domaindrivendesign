import { expect, test } from "vitest";
import { Instructor } from "./instructor";
import { UniqueEntityID } from "../../core/unique-entity-id";

test("create a instructor object", () => {
    const instructor = Instructor.create(
        { name: "Gustavo Petry", },
        new UniqueEntityID("instructorID")
    );

    expect(instructor).toEqual(
        expect.objectContaining({
            name: "Gustavo Petry",
            id: {
                value: "instructorID",
            },
        })
    );
});