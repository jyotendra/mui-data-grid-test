import MuiTable from "./mui-table";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useState} from "react";

function App() {
  const [rowToShow, setRowToShow] = useState('');

  const handleChange = (event) => {
    setRowToShow(event.target.value);
  };

  return (
    <div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Row Number</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rowToShow}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <MuiTable />
    </div>
  );
}

export default App;
