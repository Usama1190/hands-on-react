import { Route, Routes } from "react-router";
import { routes } from "./router";

const App = () => {
  return (
    <div>
      <Routes>
        {routes?.map((item, index) => (
          <Route path={item.path} element={item.element} key={index}>
            {item?.children?.map((childItem, index) => (
              <Route
                key={index}
                path={childItem.path}
                element={childItem.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
