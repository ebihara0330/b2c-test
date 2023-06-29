## ■system Name
* MDPF社外向けポータルサイト

　　 ※MDPF：Mining Digital Platform

## ■overview
* 社内向けのポータルサイトを社外にも広く情報発信するために構築する鉱山OR向けの社外ポータルサイト

　　※OR: Off the Road(建設・鉱山車両用タイヤ)

* 本システムでは、Azureクラウドと組み合わせて以下の機能を提供する
  * ポータルサイトに掲載するコンテンツの自動生成（CI/CD）機能
  * ポータルサイトのログイン・コンテンツ表示機能
  * ポータルサイトの利用状況管理機能

補足）
初回リリースで掲載するコンテンツはToolBoxのマニュアルのみを想定するが、
それを皮切りに、他のシステムのマニュアル、製品カタログ、ニュースなどを積極的に発信する想定

## ■how to use

### Development
* Azure RepositoryのソースをDL・Cloneする 

※エディタは任意 推奨はVisual Studio Code

  ```
  git clone https://MDPF@dev.azure.com/MDPF/Portal_External/_git/Portal_External
  ```

* ソース修正後差分を確認して、ローカルで動作を確認する

 ```
 git diff > "C:/temp/diff.txt"
 ```

※Pythonがインストールされていることが前提

  ```

  // rootディレクトリ（Portal_External）で以下のコマンドを実行
  python -m http.server

  // ブラウザを開いて動作を確認する
  http://localhost:8000

  ```

* Azure Repositoryに変更を反映（push）する

補足）
本サイトのRepository環境は開発用と本番用をそれぞれ作成している
実際の運用では、開発用のRepositoryにPush後、開発環境を自動生成⇒動作確認⇒承認⇒本番Repositoryに自動反映の流れになる
ブランチを複数定義する必要がない（mainにpushしても本番に反映されるわけではない）ため
各Repositoryはmainブランチのみの構成としている

  ```
  
  git add .
  git commit -m "commit message"
  git push
 
  ```

* 変更反映後、開発用のポータルサイトが自動生成されるので完了後URLにアクセスして動作を確認する


 ```

 // Pipeline（CI/CD）の実行結果確認用（正常終了していればOK）
 https://dev.azure.com/MDPF/Portal_External/_build

 // 開発用ポータルサイトのURL
 https://agreeable-field-021b50f00.3.azurestaticapps.net

 // 本番用ポータルサイトのURL
 https://gray-tree-05c429400.3.azurestaticapps.net/
 
 ```


