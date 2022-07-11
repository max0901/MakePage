const Head = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li class="nav_list">
              <a href="">HOME</a>
            </li>
            <li class="nav_list1">
              <a href="">원두납품</a>
              <ul class="hide1 hide">
                <li>
                  <a href="">개요</a>
                </li>
                <li>
                  <a href="">납품문의</a>
                </li>
              </ul>
            </li>
            <li class="nav_list2">
              <a href="">SHOP</a>
              <ul class="hide2 hide">
                <li>
                  <a href="">
                    싱글오리진 <img src="../img/next.png" alt="" />
                  </a>
                  <ul class="hide_inner1 hide_ul">
                    <li>
                      <a href="">산미(꽃향기)</a>
                    </li>
                    <li>
                      <a href="">단맛(초콜릿)</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    에스프레소 블렌딩 <img src="../img/next.png" alt="" />
                  </a>
                  <ul class="hide_inner2 hide_ul">
                    <li>
                      <a href="">전자동 머신</a>
                    </li>
                    <li>
                      <a href="">반자동 머신</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">커피티백</a>
                </li>
              </ul>
            </li>
            <li class="nav_list">
              <a href="">교육</a>
            </li>
            <li class="nav_list">
              <a href="">자료실</a>
            </li>
          </ul>

          <div id="login">
            <ul>
              <li>
                <a href="">로그인</a>
              </li>
              <li>
                <a href="">
                  <img src="../img/basket.png" alt="장바구니" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Head;
