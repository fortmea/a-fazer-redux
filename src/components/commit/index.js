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
                        author: json.commit.author.login,
                        branch: json.name,
                        date: json.commit.commit.author.date,
                        sha: json.commit.sha,
                        link: json._links.html
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="mt-5">
                <h5>Dados do último commit:</h5>
                <i class="fa fa-male" aria-hidden="true"></i> Autor: {this.state.author}<br/>
                <i class="fa fa-tree" aria-hidden="true"></i> Branch: {this.state.branch}<br/>
                <i class="fa fa-calendar" aria-hidden="true"></i> Data: {this.state.date}<br/>
                <i class="fa fa-check" aria-hidden="true"></i> SHA: {this.state.sha}
            </div>
        );
    }
}