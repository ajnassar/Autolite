import React from 'react'
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const wrapperStyle = { width: 400, margin: 50 };

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 100000]
    };
  }

  onSliderChange = (value) => {
    console.log(value)
    this.setState({
      value
    });
  }
  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <Range allowCross={false} min={0} max={100000} step={1000} defaultValue={[0, 100000]} tipFormatter={value => `$${value}`} onChange={this.onSliderChange} />
        </div>
      </div>
    )
  }
}

export default App
