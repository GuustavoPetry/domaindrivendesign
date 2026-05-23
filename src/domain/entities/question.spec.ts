import { expect, test } from "vitest";
import { Question } from "./question";
import { UniqueEntityID } from "../../core/unique-entity-id";

test("create a question object", () => {
    const question = Question.create({
        title: "Question Title",
        content: "Question Content",
        createdAt: new Date(),
        authorId: new UniqueEntityID("authorID"),
    });

    expect(question).toEqual(
        expect.objectContaining({
            title: "Question Title",
            content: "Question Content",
            createdAt: expect.any(Date),
            authorId: {
                value: "authorID",
            },
        })
    );
});