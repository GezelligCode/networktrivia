const app = Vue.createApp({
  data() {
    return {
      output: "Answer",
      data: ["test0", "test1", "test2"],
      data2: [
        {
          question: "Q0",
          answer: "A0",
        },
        {
          question: "Q1",
          answer: "A1",
        },
        {
          question: "Q2",
          answer: "A2",
        },
      ],
      counter: 0,
    };
  },
  computed: {
    cardOutput() {
      return this.output;
    },
    cardData() {
      return this.data[this.counter];
    },
    cardData2() {
      if (this.output == "Answer") {
        return this.data2[this.counter].question;
      } else {
        return this.data2[this.counter].answer;
      }
    },
  },
  methods: {
    randomizeCounter() {
      this.counter = this.randomizer(0, this.data.length);
    },
    showAnswer() {
      if (this.output == "Answer") {
        this.output = "Question";
      } else {
        this.output = "Answer";
      }
    },
    nextCard() {
      if (this.counter <= 1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    },
  },
});

app.mount("#trivia");
