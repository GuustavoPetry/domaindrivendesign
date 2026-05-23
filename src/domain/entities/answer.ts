import { Entity } from "../../core/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

interface AnswerProps {
    title: string,
    content: string,
    createdAt: Date,
    updatedAt?: Date,
    authorId: UniqueEntityID,
    questionId: UniqueEntityID,
}

export class Answer extends Entity<AnswerProps> {
    get title() {
        return this.props.title;
    }

    get content() {
        return this.props.content;
    }

    get createdAt () {
        return this.props.createdAt;
    }

    get updatedAt () {
        return this.props.updatedAt;
    }

    get authorId () {
        return this.props.authorId;
    }

    get questionId () {
        return this.props.questionId;
    }

    static create(props: AnswerProps, id?: UniqueEntityID) {
        const answer = new Answer(props, id);

        return answer;
    }
}