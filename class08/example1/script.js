class Banner extends React.Component {
    render() {
        return <h2>Name: {this.props.name}</h2>
    }
}

class TeachersList extends React.Component {

    render() {
        const list = ["Hulk", "Scarlet Witch", "Thor", "Black Panther"]

        return <div>
            <Banner name={list[0]} />
            <Banner name={list[1]} />
            <Banner name={list[2]} />
            <Banner name={list[3]} />
        </div>
    }
}

ReactDOM.render(<TeachersList />,
    document.getElementById("position1")
)