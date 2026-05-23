import { Entity } from "../../core/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

interface QuestionProps {
    title: string,
    content: string,
    createdAt: Date,
    authorId: UniqueEntityID,
    bestAnswerId?: UniqueEntityID,
}

export class Question extends Entity<QuestionProps> {

    get title () {
        return this.props.title;
    }

    get content () {
        return this.props.content;
    }

    get createdAt () {
        return this.props.createdAt;
    }

    get authorId () {
        return this.props.authorId;
    }

    get bestAnswerId () {
        return this.props.bestAnswerId;
    }

    static create(props: QuestionProps, id?: UniqueEntityID) {
        const question = new Question(props, id);

        return question;
    }
}