import { Card } from "react-bootstrap"; 

export default function QuestionCard({question, answer, showAnswer}) {
    return (
        <Card className="card">
            <Card.Body>
                <Card.Text>
                    {showAnswer ? answer:question}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}