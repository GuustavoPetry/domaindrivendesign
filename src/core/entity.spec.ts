import { expect, test } from "vitest";
import { Entity } from "./entity";
import { UniqueEntityID } from "./unique-entity-id";

interface TestProps {
    title: string,
    content: string,
    createdAt: Date,
    updatedAt?: Date,
}

class EntitySpec extends Entity<TestProps> {
    get title() {
        return this.props.title;
    }

    get content() {
        return this.props.content;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: TestProps, id?: UniqueEntityID) {
        const entitySpec = new EntitySpec(props, id);

        return entitySpec;
    }
}

test("instancied spec class containing props and id", () => {
    const id = new UniqueEntityID("TEST-ID");

    const entity = EntitySpec.create({
        title: "TEST-TITLE",
        content: "TEST-CONTENT",
        createdAt: new Date(),
    }, id);

    expect(entity.id.value).toBe("TEST-ID");
    expect(entity.title).toBe("TEST-TITLE");
    expect(entity.content).toBe("TEST-CONTENT");
    expect(entity.createdAt).instanceOf(Date);
    expect(entity.updatedAt).toBe(undefined);
});