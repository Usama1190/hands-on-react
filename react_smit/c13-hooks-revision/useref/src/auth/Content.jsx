import Header from "./Header"

const Content = ({name}) => {
  return (
    <div className="content">
      <Header {...{name}} />
    </div>
  )
}

export default Content
