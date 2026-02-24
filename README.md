# morethan-log

<img width="1715" alt="image" src="https://user-images.githubusercontent.com/72514247/209824600-ca9c8acc-6d2d-4041-9931-43e34b8a9a5f.png">

Notion을 콘텐츠 관리 시스템(CMS)으로 사용하는 Next.js 정적 블로그입니다. 블로그 형식의 게시글과 이력서용 페이지 형식을 모두 지원하며, Vercel로 배포할 수 있습니다.

[데모 블로그](https://morethan-log.vercel.app) | [데모 이력서](https://morethan-log.vercel.app/resume)

## 주요 기능

**📒 Notion으로 글 작성**

- 웹사이트에 글을 올릴 때 Github에 별도로 커밋할 필요가 없습니다.
- Notion에서 작성한 게시글이 사이트에 자동으로 반영됩니다.

**📄 이력서용 페이지로 사용 가능**

- Notion을 이용해 단일 페이지 사이트를 만들 때 유용합니다.
- 이력서, 포트폴리오 등으로 활용할 수 있습니다.

**👀 SEO 친화적**

- 게시글용 OG 이미지(썸네일)를 동적으로 생성합니다. ([og-image-korean](https://github.com/morethanmin/og-image-korean))
- 게시글용 sitemap을 동적으로 생성합니다.

**🤖 CONFIG를 통한 높은 커스터마이징과 다양한 플러그인 지원**

- 프로필 정보는 Config(`site.config.js`)에서 수정할 수 있습니다.
- Google Analytics, Search Console, Github Issues(Utterances), Cusdis 댓글 플러그인을 지원합니다.

## 시작하기

1. 이 저장소에 Star를 눌러주세요.
2. 저장소를 본인 계정으로 [Fork](https://github.com/morethanmin/morethan-log/fork)하세요.
3. [Notion 템플릿](https://morethanmin.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda)을 복제하고, 웹에 공유(Share to Web)하세요.
4. 웹 링크를 복사하고 링크에서 Notion 페이지 ID를 확인해 두세요. 형식은 [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`] 입니다.
5. 포크한 저장소를 클론한 뒤, `site.config.js`를 원하는 설정으로 수정하세요.
6. 아래 환경 변수를 설정하여 Vercel에 배포하세요.

   - `NOTION_PAGE_ID` (필수): Share to Web URL에서 가져온 Notion 페이지 ID입니다. 전체 URL이 아니라 위 예시의 NOTION_PAGE_ID 부분만 입력하면 됩니다.
   - `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`: Google Analytics 플러그인용.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console 플러그인용.
   - `NEXT_PUBLIC_NAVER_SITE_VERIFICATION`: Naver Search Advisor 플러그인용.
   - `NEXT_PUBLIC_UTTERANCES_REPO`: Utterances 플러그인용.

## 나만의 morethan-log 만들기 10단계 (23.06.23 기준)

<details>
   <summary>가이드를 보려면 클릭</summary>

   0. Notion, Vercel 계정을 준비합니다.

   1. 이 저장소에 ⭐ `Star`를 누르고 `Fork`합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/b0421776-2bfe-42bc-ae31-d90206fd5789' width = '500'>
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/185a8e4c-4ae2-4a38-b6f4-dc2a06a45c28' width = '500'>

   2. [Notion 템플릿](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda)을 `클릭`하면 브라우저에서 템플릿 페이지를 볼 수 있습니다. 오른쪽 상단의 `Duplicate` 버튼(이미지의 복제)을 클릭합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/a5375429-28f0-4bba-a355-0d391cad58db' width = '500'>

   3. 그러면 계정의 `Notion 앱에서 Notion 페이지`를 확인할 수 있습니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/09af5533-43d9-48e5-95eb-dcac84c97c1f' width = '500'>

   4. 오른쪽 상단에서 `공유(Share)`와 `게시(Publish)`를 클릭하고 웹 링크를 확인합니다. (웹 링크 복사)
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/886fe4a2-79ca-4dbc-b1e1-93984e7e3f44' width = '500'>

   5. 포크한 저장소의 **site.config.js** 파일을 `수정`합니다.
   > 💡 참고: 예시에서는 **빨간색으로 표시된 2부분**을 수정했습니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/3d9c0da5-92bc-4372-8752-7bfc810b4986' width = '500'>

   6. Vercel로 이동하여 `로그인`합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/07742ad0-4766-43b0-9ebd-5311f9711bc2' width = '500'>

   7. **Add New...**를 사용해 새 프로젝트를 `생성(Build)`합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/517d46be-c9bf-4181-aaa5-e9bd2fcdc822' width = '500'>

   8. `포크한 morethan-log 저장소`를 `가져오기(Import)`합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/07742ad0-4766-43b0-9ebd-5311f9711bc2' width = '500'>

   9. Vercel 프로젝트에 **환경 변수(Environment variables)**를 `추가`합니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/703b50a3-3a90-4915-ab73-1baca4c285f8' width = '500'>

   10. 배포가 완료될 때까지 `기다립니다`. 배포가 성공하면 아래와 같은 화면을 볼 수 있습니다.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/a7d72caa-4354-4f81-9577-c773faeed7c6' width = '500'>

   🥳 축하합니다! 이제 블로그를 확인해보세요.

   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/3876a273-a270-47ef-a2ad-663519d9e537' width = '500'>

</details>

## FAQ

<details>
   <summary>FAQ를 보려면 클릭</summary>
   Q1: avatar.svg 제작을 마쳤다면 favicon.ico와 apple-touch-icon.png는 어떻게 만들 수 있나요?

   A1: https://www.favicon-generator.org/ 를 확인해보세요.

   Q2: sitemap 파일을 직접 설정해야 하나요?
   A2: 시스템에서 sitemap.xml을 동적으로 생성하므로 수동 설정이 필요 없습니다.

   Q3: Notion 게시글이 자동으로 업데이트되지 않는 이유는 무엇인가요?
   A3: site.config.js의 revalidateTime을 설정한 뒤, 반영까지 걸리는 시간을 확인해 주세요.

   Q4: site.config.js의 NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID와 NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION에는 무엇을 입력해야 하나요?
   A4: https://github.com/morethanmin/morethan-log/issues/203 을 참고하세요. 설정 후 반영까지 시간이 걸릴 수 있습니다.

다른 문제가 있다면, 추후 사용자들에게 도움이 될 수 있도록 GitHub README에 자유롭게 추가해 주세요. 여러분의 기여를 기다리고 있습니다!

</details>

## 기여

[Contributing 가이드](.github/CONTRIBUTING.md)를 확인해주세요.

### 기여자

<!--
Contributors template:
<a href="https://github.com/{username}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<a href="https://github.com/morethanmin/morethan-log/graphs/contributors">
<img src="https://contrib.rocks/image?repo=morethanmin/morethan-log" />
</a>

## 후원

morethan-log는 MIT 라이선스를 따르는 오픈소스 프로젝트입니다. 훌륭한 후원자와 스폰서의 지원 덕분에 계속 성장할 수 있습니다.

### 스폰서

<!--
Sponsors template:
<a href="https://github.com/{uesrname}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/siyeons"><img src="https://avatars.githubusercontent.com/u/35549653?v=4" width="50px" alt="siyeons" /></a>&nbsp;&nbsp;
</p>

## 라이선스

[MIT 라이선스](LICENSE)를 따릅니다.
