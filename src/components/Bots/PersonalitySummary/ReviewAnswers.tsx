import { Table } from "antd";
import React from "react";
import { ReviewAnswer } from "../../../types/ReviewAnswer";

export type IReviewAnswersProps = {
    Answers: any
    QuestionsIds: Object
    steps?: any
}

export interface IReviewAnswersState {
    Answers: ReviewAnswer[]
}

// Done: Review Component
class ReviewAnswers extends React.Component<IReviewAnswersProps, IReviewAnswersState> {
    state: IReviewAnswersState = {
        Answers: []
    };
    columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            key: 'answer',
        }
    ];

    GenerateAnswers() {
        let answers: ReviewAnswer[] = [];
        for (let id in this.props.QuestionsIds) {
            const value = this.props.steps[id]?.value;
            if (value !== null && value !== undefined)
                if (Object.keys(this.props.Answers).includes(id))
                    answers.push(this.props.Answers[id](value, this.props.steps));
        }
        this.setState({ ...this.state, Answers: answers })
    }

    componentDidMount() {
        this.GenerateAnswers()
    }
    render() {
        return (
            <Table pagination={false} dataSource={this.state.Answers} columns={this.columns} />
        );
    }
}

export default ReviewAnswers;