import ShapeOne from "../../components/shapes/shape-one.component";
import convert from "convert";
import { useEffect, useState } from "react";
import ConverterNav from "../../components/header/converter-nav.component";
import { getTypeOptions } from "../../utils/state/states";
const defaultValues = {
  value: 0,
  from: "meters",
  to: "kilometers",
};
const Converter = ({ type }) => {
  const [formData, setFormData] = useState(defaultValues),
    [result, setResult] = useState(0),
    { value, from, to } = formData,
    // rd = (num) => {
    //   return Math.round((num + Number.EPSILON) * 1000000) / 1000000;
    // },
    handleChange = (e) => {
      const { name, value } = e.target;
      //   const formatValue =
      //     typeof value === "number" ? value.toExponential : value;
      setFormData({ ...formData, [name]: value });
    },
    swap = () => {
      setFormData({ ...formData, from: to, to: from });
    };
  useEffect(() => {
    const res = convert(Number(value), from).to(to);
    // console.log("response: ", res);
    setResult(res);
  }, [value, from, to]);
  const options = getTypeOptions(type).map((item) => (
    <option value={item}>{item}</option>
  ));
  useEffect(() => {
    const opts = getTypeOptions(type);
    setFormData((state) => ({ ...state, from: opts[0], to: opts[1] }));
  }, [type]);

  return (
    <div id="app-body">
      <ShapeOne />
      <ConverterNav />
      <div id="appCapsule">
        <div className="section mt-4">
          <div className="card main">
            <div className="card-body">
              <div className="form-group basic p-0">
                <div className="exchange-heading">
                  <label className="group-label" for="fromAmount">
                    From
                  </label>
                  <div className="exchange-wallet-info">
                    {value} : <strong> {from}</strong>
                  </div>
                </div>
                <div className="exchange-group">
                  <div className="input-col">
                    <input
                      type="number"
                      className="form-control form-control-lg pe-0 border-0"
                      id="fromAmount"
                      placeholder="0"
                      name="value"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="select-col">
                    <select
                      className="form-select form-select-lg currency"
                      value={from}
                      onChange={handleChange}
                      name="from"
                    >
                      {options}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="exchange-line">
            <div className="exchange-icon" onClick={swap}>
              <ion-icon
                name="swap-vertical-outline"
                role="img"
                className="md hydrated"
                aria-label="swap vertical outline"
              ></ion-icon>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card main">
            <div className="card-body">
              <div className="form-group basic p-0">
                <div className="exchange-heading">
                  <label className="group-label" for="toAmount">
                    To
                  </label>
                  <div className="exchange-wallet-info">
                    {result} : <strong> {to}</strong>
                  </div>
                </div>
                <div className="exchange-group">
                  <div className="input-col">
                    <input
                      type="number"
                      className="form-control form-control-lg pe-0 border-0"
                      id="toAmount"
                      placeholder="0"
                      value={result}
                      readOnly
                    />
                  </div>
                  <div className="select-col">
                    <select
                      className="form-select form-select-lg currency"
                      name="to"
                      onChange={handleChange}
                      value={to}
                    >
                      {options}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section mt-2">
          <div className="row fontsize-caption">
            <div className="col">
              <b>Result</b>
            </div>
            <div className="col">
              <b>{value}</b> {from}
            </div>
            <div className="col">
              <b>=</b>
            </div>
            <div className="col">
              <b>{result} </b>
              {to}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
