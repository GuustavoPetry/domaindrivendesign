import { expect, test } from "vitest";
import { Answer } from "./answer";
import { UniqueEntityID } from "../../core/unique-entity-id";

test("create a answer object", () => {
    const answer = Answer.create({
        title: "Answer Title",
        content: "Answer Content",
        createdAt: new Date(),
        authorId: new UniqueEntityID("authorID"),
        questionId: new UniqueEntityID("questionID"),
    });

    expect(answer).toEqual(expect.objectContaining({
        title: "Answer Title",
        content: "Answer Content",
        createdAt: expect.any(Date),
        authorId: {
            value: "authorID"
        },
        questionId: {
            value: "questionID"
        }
    }))
});