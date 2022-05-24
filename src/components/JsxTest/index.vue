<script>
export default {
  name: 'JsxTest',
  components: {},
  data() {
    return {
      value: '123'
    }
  },
  setup() {
    console.log(123);
  },
  methods: {},
  render() {
    return (
      <div>
        {this.value}
        <input vModel={this.value} />
      </div>
    );
  },
}
</script>
<style lang='scss' scoped>

</style>
