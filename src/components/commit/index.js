import React from "react"
export default class LatestCommitComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            branch: "",
            date: "",
            sha: "",
            link: ""
        };
    }

    componentDidMount() {
        // Replace this with your own repo
        // https://api.github.com/repos/:owner/:repo/branches/master
        fetch(
            "https://api.github.com/repos/fortmea/a-fazer-redux/branches/main"
        )
            .then(response => {
                response.json().then(json => {
                    this.setState({
                        message: json.commit.commit.message,
                        author: json.commit.author.login,
                        branch: json.name,
                        date: json.commit.commit.author.date,
                        sha: json.commit.sha,
                        link: json._links.html
                    });
                });
            })
    }

    render() {
        return (
            <div className="mt-5">
                <h5>Dados do último commit:</h5>
                <i className="fa fa-file-text" aria-hidden="true"></i> Mensagem: {this.state.message}<br/>
                <i className="fa fa-male" aria-hidden="true"></i> Autor: {this.state.author}<br/>
                <i className="fa fa-tree" aria-hidden="true"></i> Branch: {this.state.branch}<br/>
                <i className="fa fa-calendar" aria-hidden="true"></i> Data: {this.state.date}<br/>
                <i className="fa fa-check" aria-hidden="true"></i> SHA: {this.state.sha}
            </div>
        );
    }
}