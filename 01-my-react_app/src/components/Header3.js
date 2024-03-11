import { Fragment} from 'react';
// export default로 내보낸 컴포넌트는 { }블락을 쓰지 않고 import가능
// export 로 내보낸 컴포넌트는 {Fragment}  블락 내부에서 import

// Fragment 로 감싸면 내부 태그를 그대로 출력

function Header() {
    return (

      <Fragment>

            <h1> 3번째 Header</h1>
            <h2> Fragment를 사용</h2>
      </Fragment>

    );

}

export default Header;