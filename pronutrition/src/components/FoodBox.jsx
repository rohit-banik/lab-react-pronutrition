import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        {
          name: "orange",
          calories: 65,
          img: "https://www.kindpng.com/picc/m/156-1560262_orange-slice-png-high-quality-image-illustrator-orange.png",
        },
        {
          name: "chocolate milk",
          calories: 208,
          img: "https://funmoneymom.com/wp-content/uploads/2021/03/Chocolate-Milkshake-square.jpg",
        },
        {
          name: "apple",
          calories: 81,
          img: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
        },
        {
          name: "watermelon",
          calories: 85,
          img: "https://images.news18.com/ibnlive/uploads/2022/03/watermelon.jpg",
        },
        {
          name: "banana",
          calories: 105,
          img: "https://cookifi.com/blog/wp-content/uploads/2018/06/banana-3.jpg",
        },
        {
          name: "biscuit",
          calories: 103,
          img: "https://static.toiimg.com/thumb/75677794.cms?imgsize=1422703&width=800&height=800",
        },
        {
          name: "pizza",
          calories: 290,
          img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
        },
        {
          name: "grapes",
          calories: 114,
          img: "https://www.thespruceeats.com/thmb/9avSwgtRFDY30AwHHn5NaEH93TI=/1333x1000/smart/filters:no_upscale()/what-are-grapes-5193263-hero-01-80564d77b6534aa8bfc34f378556e513.jpg",
        },
        {
          name: "raspberries",
          calories: 61,
          img: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41438-019-0199-2/MediaObjects/41438_2019_199_Fig1_HTML.jpg",
        },
        {
          name: "strawberries",
          calories: 45,
          img: "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg",
        },
        {
          name: "mango",
          calories: 60,
          img: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1090910984-min-640x514.jpg",
        },
        {
          name: "momo",
          calories: 123,
          img: "https://www.thespruceeats.com/thmb/MumRfdA1gevlZn_JxeKZK7urVCE=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
        },
        {
          name: "chicken",
          calories: 344,
          img: "https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900",
        },
        {
          name: "rice",
          calories: 130,
          img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
        },
        {
          name: "sweets",
          calories: 100,
          img: "https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_725231338.jpg",
        },
        {
          name: "noodles",
          calories: 138,
          img: "https://avegtastefromatoz.com/wp-content/uploads/2022/01/Noodle-steps-FI.jpg",
        },
        {
          name: "biriyani",
          calories: 502,
          img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
        },
        {
          name: "roti",
          calories: 297,
          img: "https://static.toiimg.com/photo/90374928.cms",
        },
        {
          name: "paratha",
          calories: 126,
          img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Paratha%2Fparatha-stacked-top_view",
        },
        {
          name: "egg",
          calories: 155,
          img: "https://www.licious.in/blog/wp-content/uploads/2022/03/Classic-Egg.jpg",
        },
      ],
      searchTxt: "",
      calories_count: 0,
      myFruits: [],
    };
  }
  searchFruit = (event) => {
    this.setState({
      searchTxt: event.target.value,
    });
  };
  capatalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  addFruit = (event) => {
    let count = document.getElementById(event.target.value).value;
    let cal = this.state.fruits.filter((fruit) => {
      return fruit.name === event.target.value;
    });
    let fruitObj = {
      id: event.target.value,
      text: `${count} X ${event.target.value} = ${cal[0].calories * count} cal`,
      btn_id: `${event.target.value}R`,
      calo: cal[0].calories * count,
    };
    this.setState({
      myFruits: this.state.myFruits.concat(fruitObj),
      calories_count: this.state.calories_count + cal[0].calories * count,
    });
  };
  removeFruit = (event) => {
    document.getElementById(event.target.value).remove();
    let calorie = this.state.myFruits.filter((fruit) => {
      return `${fruit.id}R` === event.target.value;
    });
    this.setState({
      calories_count: this.state.calories_count - calorie[0].calo,
    });
  };
  render() {
    return (
      <div className="main-container">
        <div className="search-container">
          <div>Search</div>
          <input
            type="text"
            placeholder="Find a food"
            onChange={this.searchFruit}
            id="search"
          />
        </div>
        <div className="food-container">
          <div className="left">
            {this.state.fruits
              .filter((fruit) => {
                return fruit.name.includes(this.state.searchTxt);
              })
              .map((fruit) => {
                return (
                  <div key={fruit.name} className="fruit">
                    <img src={fruit.img} alt="" />
                    <div className="detail">
                      <h1>{this.capatalize(fruit.name)}</h1>
                      <h4>Calories: {fruit.calories}</h4>
                    </div>
                    <div className="count">
                      <input
                        type="number"
                        defaultValue="1"
                        id={fruit.name}
                        min="0"
                      />
                      <button onClick={this.addFruit} value={fruit.name}>
                        &#x2B;
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="right">
            <h1>
              Today's Food <span>{this.state.calories_count} Calories</span>
            </h1>
            {this.state.myFruits
              .filter((fruit) => {
                return fruit.text !== "";
              })
              .map((fruit) => {
                return (
                  <div key={fruit.id} className="item" id={fruit.btn_id}>
                    <span>{fruit.text}</span>
                    <button onClick={this.removeFruit} value={fruit.btn_id}>
                      &#10006;
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
