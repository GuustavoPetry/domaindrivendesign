import { expect, test } from "vitest";
import { UniqueEntityID } from "./unique-entity-id";

test("create unique id", () => {
    const id = new UniqueEntityID("MY-ID");

    expect(id.value).toEqual("MY-ID");
});