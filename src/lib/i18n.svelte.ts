export type Locale = 'en' | 'ja';
export type LanguageSetting = 'system' | 'en' | 'ja';

const STORAGE_KEY = 'openquota_language';

const jaTranslations: Record<string, string> = {
  // Common & App
  OpenQuota: 'OpenQuota',
  Settings: '設定',
  Customize: 'カスタマイズ',
  'Customize…': 'カスタマイズ…',
  Save: '保存',
  Cancel: 'キャンセル',
  Close: '閉じる',
  Remove: '削除',
  Delete: '削除',
  Clear: 'クリア',
  Confirm: '確認',
  Back: '戻る',
  Refresh: '更新',
  Refreshing: '更新中',
  'No data': 'データなし',
  'Loading…': '読み込み中…',
  Error: 'エラー',
  Success: '成功',

  // Dashboard
  'Welcome to OpenQuota': 'OpenQuotaへようこそ',
  'Open Customize': 'カスタマイズを開く',
  'Turn on Customize to choose what to show.':
    '「カスタマイズ」から表示する項目を選択してください。',
  'Refresh {name}': '{name}を更新',
  'Quit OpenQuota': 'OpenQuotaを終了',
  'Floating Window': 'フローティングウィンドウ',
  'Dock to Menu Bar': 'メニューバーに固定',
  'Dock to System Tray': 'システムトレイに固定',
  'Check for Updates…': 'アップデートを確認…',
  'New release': '新バージョン',
  'Downloading update…': 'アップデートをダウンロード中…',
  'Installing update…': 'アップデートをインストール中…',
  'Download interrupted. Retrying…': 'ダウンロードが中断されました。再試行中…',
  'Dismiss update': '通知を閉じる',
  'Install Update': 'アップデートをインストール',
  'Open Download Page': 'ダウンロードページを開く',
  'Share card copied': '共有カードをコピーしました',
  'Share summary': 'サマリーを共有',

  // Settings screen
  General: '全般',
  Appearance: '外観',
  Notifications: '通知',
  Advanced: '高度な設定',
  Updates: 'アップデート',
  Language: '言語',
  'Show Total Spend': '総支出を表示',
  'Launch at Login': 'ログイン時に起動',
  'Global Shortcut': 'グローバルショートカット',
  'Record Shortcut': 'ショートカットを登録',
  'Type Shortcut…': 'ショートカットを入力…',
  'Clear global shortcut': 'ショートカットを解除',
  'Open OpenQuota from anywhere': 'どこからでもOpenQuotaを開く',
  'Icon Style': 'アイコンスタイル',
  Text: 'テキスト',
  Bars: 'バー',
  Theme: 'テーマ',
  System: 'システム',
  Light: 'ライト',
  Dark: 'ダーク',
  Density: '表示密度',
  Default: '標準',
  Compact: 'コンパクト',
  'Reduce Animations': 'アニメーションを減らす',
  'Window Mode': 'ウィンドウモード',
  'Tray Popup': 'トレイポップアップ',
  'Panel Height': 'パネルの高さ',
  Automatic: '自動',
  Manual: '手動',
  'Usage Display': '使用量表示',
  Used: '使用済み',
  Left: '残り',
  'Reset Display': 'リセット表示',
  Countdown: 'カウントダウン',
  Exact: '指定日時',
  'Time Format': '時刻形式',
  Auto: '自動',
  '12-hour': '12時間',
  '24-hour': '24時間',
  English: 'English',
  日本語: '日本語',
  'Always Show Pacing Projections': 'ペース予測を常に表示',
  'Show projections even when usage is healthy.': '利用が適正な範囲でも予測を表示します。',
  'Almost out of quota': 'クォータ残量低下',
  'Cutting it close': '期限切れ間近',
  'Will run out': 'クォータ枯渇予測',
  'Log Level': 'ログレベル',
  Warn: '警告',
  Warning: '警告',
  Info: '情報',
  Debug: 'デバッグ',
  'Check for Updates Automatically': '自動でアップデートを確認',
  'Reset All Settings…': 'すべての設定をリセット…',
  'Reset All Customization…': 'すべてのカスタマイズをリセット…',
  'Copy Log Path': 'ログのパスをコピー',
  'Reveal in Finder': 'Finderで表示',
  'Reveal in File Explorer': 'エクスプローラーで表示',
  'Open Containing Folder': '保存先フォルダーを開く',
  'Open Notification Settings': '通知設定を開く',
  'Notifications Disabled': '通知が無効',
  'Open System Settings to allow notifications.': 'システム設定を開いて通知を許可してください。',
  'Show Usage As': '使用量の表示形式',
  'Reset Times': 'リセット時刻の表示形式',
  'Exact Time': '正確な日時',
  'Always Show Pacing': 'ペース予測を常に表示',
  "Show how you're pacing on every metric, not just ones near their limit":
    '上限間近のものだけでなく、すべてのメトリクスで利用ペースの予測を表示します',
  'Almost Out': '残量低下',
  'Alert when a limit drops below 10% remaining.': '残量が10%未満になったときに通知します。',
  'Cutting It Close': '上限間近',
  'Alert when a limit is projected to finish with little left.':
    '期間終了時に残量がほぼゼロになると予測されたときに通知します。',
  'Will Run Out': 'クォータ枯渇予測',
  'Alert when a limit is projected to finish before it resets.':
    'リセット前に上限に達すると予測されたときに通知します。',
  'Notifications are blocked': '通知が無効化されています',
  'Permission is required': '通知の許可が必要です',
  'Enable OpenQuota notifications in system settings.':
    'システム設定でOpenQuotaの通知を有効にしてください。',
  'Allow notifications to receive the alerts selected above.':
    '上記の通知を受け取るには通知を許可してください。',
  'Open Settings': '設定を開く',
  Allow: '許可',
  'Checking…': '確認中…',
  "Choose what's visible and where": '表示する項目と場所を選択',
  "Couldn't copy the log path to the clipboard.":
    'ログのパスをクリップボードにコピーできませんでした。',
  "Couldn't reveal the log file.": 'ログファイルを表示できませんでした。',
  'Activate to record. While recording, press a modifier shortcut to save it, Delete to clear it, or Escape to cancel.':
    'クリックして登録。修飾キー付きショートカットを入力して保存、Deleteで解除、Escでキャンセル。',
  'All settings restored': 'すべての設定を初期値に戻しました',
  'Copied to clipboard': 'クリップボードにコピーしました',
  'Log path copied': 'ログのパスをコピーしました',
  'Settings could not be reset.': '設定をリセットできませんでした。',
  'Provider screenshot could not be copied.':
    'プロバイダーのスクリーンショットをコピーできませんでした。',
  'Total Spend screenshot could not be copied.':
    '総支出のスクリーンショットをコピーできませんでした。',
  'Resize panel height': 'パネルの高さを変更',
  'OpenQuota window controls': 'OpenQuotaウィンドウ操作',
  'Close About': 'OpenQuotaについてを閉じる',
  'Private, local usage monitoring for your AI coding tools.':
    'AIコーディングツールのためのローカルプライベート使用量トラッカー',
  'Loading OpenQuota…': 'OpenQuotaを読み込み中…',
  'Close OpenQuota': 'OpenQuotaを閉じる',
  'Hide OpenQuota': 'OpenQuotaを隠す',
  'Version {version}': 'バージョン {version}',
  'OpenQuota {version} is up to date.': 'OpenQuota {version} は最新です。',
  'OpenQuota {version} is available.': 'OpenQuota {version} が利用可能です。',
  'An OpenQuota update is available.': 'OpenQuotaのアップデートが利用可能です。',
  'Updates could not be checked.': 'アップデートを確認できませんでした。',
  'The update could not be installed.': 'アップデートをインストールできませんでした。',
  'The OpenQuota download page could not be opened.': 'ダウンロードページを開けませんでした。',
  'Try again later.': 'しばらくしてからもう一度お試しください。',
  'Try again or download the installer from the release page.':
    '再試行するか、リリースページからインストーラーをダウンロードしてください。',

  // Customize list & detail
  'Notifications, appearance and more': '通知、外観などの設定',
  '{count} metrics': '{count}個のメトリクス',
  metrics: '個のメトリクス',
  'Drag metrics here': 'ここにメトリクスをドラッグ',
  'Starred for menu bar': 'メニューバーにピン留めしました',
  'Removed from menu bar': 'メニューバーのピン留めを解除しました',
  'Up to 2 stars per provider': 'プロバイダーごとに最大2つまで固定できます',
  'Always Visible': '常に表示',
  'On Demand': 'オンデマンド',
  'Rename Provider': 'プロバイダー名を変更',
  'Rename Card': 'カード名を変更',
  'Rename…': '名前を変更…',
  Rename: '変更',
  Name: '名前',
  'Name for {name}': '{name}の名前',
  'Display Name': '表示名',
  'Display name': '表示名',
  'Restore default': '初期値に戻す',
  'Rename {name} for this device. Blank restores the default name.':
    'このデバイスでの{name}の表示名を変更します。空欄にするとデフォルト名に戻ります。',

  // API Key section
  'API Key': 'APIキー',
  'Enter API key': 'APIキーを入力',
  'Paste API key': 'APIキーを貼り付け',
  'From Your Environment': '環境変数から読み込み済み',
  'From Config File': '設定ファイルから読み込み済み',
  'Saved securely': '安全に保存済み',
  'Custom Key': 'カスタムキー',
  'Remove Saved Key': '保存済みキーを削除',
  'Remove saved API key for {name}?': '{name}の保存済みAPIキーを削除しますか？',
  'Remove saved API key?': '保存済みAPIキーを削除しますか？',
  'This will remove the key from secure storage.': '安全なストレージからキーが削除されます。',
  "The saved key will be removed from secure storage. This can't be undone.":
    '保存されたキーは安全なストレージから削除されます。この操作は取り消せません。',
  'Reveal API key': 'APIキーを表示',
  'Hide API key': 'APIキーを隠す',
  'Show API key': 'APIキーを表示',
  'Remove saved API key': '保存されたAPIキーを削除',
  Done: '完了',
  Add: '追加',
  Edit: '編集',
  'Saving…': '保存中…',
  'Removing…': '削除中…',
  'Remove key': 'キーを削除',
  'Override With a Custom Key': 'カスタムキーで上書きする',
  'The API key could not be saved.': 'APIキーを保存できませんでした。',
  'The saved API key could not be removed.': '保存されたAPIキーを削除できませんでした。',
  'The system credential store is unavailable.': 'システム資格情報ストアを利用できません。',

  // Total Spend
  'Total Spend': '総支出',
  Today: '今日',
  Yesterday: '昨日',
  'Last 30 Days': '過去30日間',
  Cost: 'コスト',
  Tokens: 'トークン',
  'Cost/MTok': 'コスト/100万トークン',
  Share: '共有',
  Copied: 'コピーしました',
  'Copy Total Spend summary': '総支出サマリーをコピー',
  'No cost data for this period': 'この期間のコストデータはありません',
  'No token data for this period': 'この期間のトークンデータはありません',
  'No cost-per-token data for this period': 'この期間のトークン単価データはありません',

  // Reset Credits & Metric details
  "Immediately reset your usage limits. This can't be undone.":
    '使用制限を即座にリセットします。この操作は取り消せません。',
  'Use this reset?': 'このリセットを使用しますか？',
  'Claim Reset': 'リセットを適用',
  Use: '適用',
  'Use reset': 'リセットを適用',
  'Reset applied.': 'リセットを適用しました。',
  'Nothing to reset.': 'リセット対象がありません。',
  'No reset credit available.': '利用可能なリセットクレジットがありません。',
  'Reset request failed.': 'リセット要求に失敗しました。',
  'No active limit needs resetting.': 'リセットが必要な制限はありません。',
  'This reset is no longer available.': 'このリセットは利用できなくなりました。',
  'Could not use this reset. Try again.': 'リセットを適用できませんでした。再試行してください。',
  '{count} available': '{count}個 利用可能',
  'No rate limit resets available': '利用可能なリセットクレジットはありません',
  'Expiry times unavailable': '有効期限は利用できません',
  'Expiring soon': 'まもなく期限切れ',
  'Use reset expiring {date}': '{date}に期限切れのリセットを適用',
  '{title} details': '{title}の詳細',
  '{title} model usage': '{title}のモデル使用量',
  'From your Claude usage history (estimated)': 'Claudeの利用履歴より（推定）',
  'From your Claude logs and pi (estimated)': 'Claudeのログおよびpiより（推定）',
  'From your Codex logs (estimated)': 'Codexのログより（推定）',
  'From your Codex logs and pi (estimated)': 'Codexのログおよびpiより（推定）',
  'From your Cursor usage export': 'Cursorの使用状況エクスポートより',
  'From your Grok logs (estimated)': 'Grokのログより（推定）',
  'From your {name} usage history': '{name}の利用履歴より',
  'Estimated from local records.': 'ローカル記録からの推定値。',

  // Confirmation dialogs
  'Reset All Settings': 'すべての設定をリセット',
  'Reset All Customization': 'すべてのカスタマイズをリセット',
  'Reset all customization': 'すべてのカスタマイズをリセット',
  'Reset All Customization?': 'すべてのカスタマイズをリセットしますか？',
  "This turns installed providers back on and restores every provider's metric visibility and order.":
    '検出されたプロバイダーを再度有効にし、すべてのプロバイダーのメトリクス表示状態と並び順を初期値に戻します。',
  'Reset All Settings?': 'すべての設定をリセットしますか？',
  'This restores appearance, notifications, shortcuts, updates, panel sizing, provider names, and layout. Provider sign-ins, API keys, and usage history stay in place. This cannot be undone.':
    '外観、通知、ショートカット、アップデート、パネルサイズ、プロバイダー名、レイアウトを初期値に戻します。プロバイダーのログイン、APIキー、利用履歴は保持されます。この操作は取り消せません。',
  'Reset All': 'すべてリセット',
  'Resetting…': 'リセット中…',
  'Are you sure you want to reset all settings to defaults?':
    'すべての設定を初期値にリセットしてもよろしいですか？',
  'Are you sure you want to reset all customization?':
    'すべてのカスタマイズを初期値にリセットしてもよろしいですか？',

  // Extra menu & UI keys
  Options: 'オプション',
  'Options menu': 'オプションメニュー',
  'Open options': 'オプションを開く',
  'Share Screenshot': 'スクリーンショットを共有',
  'About OpenQuota': 'OpenQuotaについて',
  Hide: '非表示',
  Unstar: 'ピン留めを解除',
  '30 Days': '30日間',
  'Updating…': '更新中…',
  'Leave the name empty to go back to the default.': '空欄にするとデフォルトの名前に戻ります。',
  'We set you up with the AI tools found on your computer. Add or hide providers any time.':
    'お使いのPCで検出されたAIツールの設定を完了しました。プロバイダーの追加・非表示はいつでも行えます。',
  'Return to Tray Popup': 'トレイポップアップに戻す',
  'Keep Window Open': 'ウィンドウを開いたままにする',
  'Reset {name}': '{name}をリセット',

  // Dashboard & Metrics
  Session: 'セッション',
  Weekly: '週間',
  'Claude Weekly': 'Claude 週間',
  'Gemini 4 Argon': 'Gemini 4 Argon',
  'Usage Trend': '利用トレンド',
  'Extra Usage': '追加利用',
  'Extra Usage Balance': '追加利用残高',
  Requests: 'リクエスト',
  'Total usage': '総利用量',
  'Org Credits': '組織クレジット',
  'Org Spend': '組織支出',
  'Rate Limit Resets': 'レート制限リセット',
  'Web Searches': 'Web検索',
  'Pay as you go': '従量課金',
  Spark: 'Spark',
  'Spark Weekly': 'Spark 週間',
  requests: 'リクエスト',
  searches: '回検索',
  dollars: 'ドル',
  tokens: 'トークン',
  MTok: 'MTok',
  credits: 'クレジット',
  available: '利用可能',
  spent: '使用済み',

  // Quota Metric readings & pacing
  '{percent}% left': '残り {percent}%',
  '{percent}% used': '使用済み {percent}%',
  '{value} {unit} left': '残り {value} {unit}',
  '{value} {unit} used': '{value} {unit} 使用',
  '${value} left': '残り ${value}',
  '${value} spent': '${value} 使用済み',
  '{count} tokens': '{count} トークン',
  'peak {count} tokens': 'ピーク {count} トークン',

  '~{percent}% left at reset': 'リセット時 約{percent}% 残り',
  '~{percent}% used at reset': 'リセット時 約{percent}% 使用',
  '~100% used at reset': 'リセット時 約100% 使用',
  '~{percent}% over limit at reset': 'リセット時 約{percent}% 超過',
  '~{percent}% spare': '残り余裕 約{percent}%',
  'Limit reached': '上限到達',
  'Will reach limit': '上限到達予測',
  'Not started': '未開始',
  'Sessions start after you send your first message.':
    '最初のメッセージ送信後にセッションが開始します。',
  'Estimated quota': '推定クォータ',
  'Estimated from local usage data and may differ from billed usage.':
    'ローカル利用データからの推定値であり、実際の請求と異なる場合があります。',
  'Estimated locally, so it may differ from billed usage.':
    'ローカルでの推定値のため、実際の請求利用量と異なる場合があります。',
  'Estimated locally, so it may be off': 'ローカルでの推定値のため、誤差がある場合があります',

  // Countdown & Deadline formatting
  'Resets in {time}': 'リセットまで {time}',
  'Resets soon': 'まもなくリセット',
  'Resets today at {time}': '今日 {time} にリセット',
  'Resets tomorrow at {time}': '明日 {time} にリセット',
  'Resets {date} at {time}': '{date} {time} にリセット',
  'Reset unavailable': 'リセット日時不明',
  'Limit in {time}': '上限まで {time}',
  'Limit soon': 'まもなく上限',
  'Limit today at {time}': '今日 {time} に上限到達',
  'Limit tomorrow at {time}': '明日 {time} に上限到達',
  'Limit {date} at {time}': '{date} {time} に上限到達',

  // Update status & staleness
  'Next update in {time}': '次回更新まで {time}',
  'Waiting for first update': '初回更新を待機中',
  'Next update unavailable': '次回更新は利用できません',
  Outdated: '古いデータ',
  'Last update time unavailable': '最終更新日時は不明です',
  'Last updated moments ago': 'たった今更新',
  'Last updated {time}m ago': '{time}分前に更新',
  'Last updated {time} ago': '{time}前に更新',
  'Last updated {hours}h {minutes}m ago': '{hours}時間{minutes}分前に更新',
  'Last updated {hours}h ago': '{hours}時間前に更新',

  // Provider actions & links
  Configure: '設定',
  Retry: '再試行',
  Retrying: '再試行中',
  'Retrying…': '再試行中…',
  'Show more': 'さらに表示',
  'Show less': '折りたたむ',
  '{label}, opens in browser': '{label}（ブラウザで開く）',
  'Hide {name}': '{name}を非表示',
  Star: 'ピン留め',
  'Star for menu bar': 'メニューバーにピン留め',
  'Try Again': '再試行',
  'Download from GitHub': 'GitHubからダウンロード',
  'View Release': 'リリースを見る',
  'Only includes {names}.': '{names}のみが含まれます。',
  'Only includes {names}': '{names}のみが含まれます',
  ' and ': '、',
  'Update Available': 'アップデートがあります',
  'OpenQuota {version} is ready to download.':
    'OpenQuota {version}のダウンロード準備が完了しました。',
  'What’s new': '変更点',
  'Update download': 'アップデートのダウンロード',
  Dismiss: '閉じる',
  'Refresh all provider usage': 'すべてのプロバイダーの使用状況を更新',

  // Provider links
  Status: 'ステータス',
  Dashboard: 'ダッシュボード',
  'API Keys': 'APIキー',
  Activity: 'アクティビティ',
  Credits: 'クレジット',
  Usage: '使用状況',
  '{label}, opens in browser': '{label}（ブラウザで開く）',

  // Provider notices
  'Live usage paused': 'リアルタイム使用量の取得を一時停止',
  'Ready to retry': '再試行可能',
  'Showing the last successful limits': '前回の正常な制限値を表示中',
  'Showing the last successful limits · {retry}': '前回の正常な制限値を表示中 · {retry}',

  // Customizer and Details
  'Move {name}': '{name}を移動',
  'Enable {name}': '{name}を有効化',
  'Customize {name}': '{name}をカスタマイズ',
  'Pin {label}': '{label}を固定',
  'Unpin {label}': '{label}の固定を解除',
  'Show {label}': '{label}を表示',
  '{provider} details': '{provider}の詳細',
  '{provider} model usage': '{provider}のモデル別使用状況',
};

function detectSystemLocale(): Locale {
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
  }
  return 'en';
}

function loadInitialSetting(): LanguageSetting {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'system' || saved === 'en' || saved === 'ja') {
      return saved;
    }
  }
  // In test environments, default to 'en' so test assertions continue matching English defaults
  if (import.meta.env.MODE === 'test') {
    return 'en';
  }
  return 'system';
}

let currentSetting = $state<LanguageSetting>(loadInitialSetting());

export function getLanguageSetting(): LanguageSetting {
  return currentSetting;
}

export function setLanguageSetting(setting: LanguageSetting): void {
  currentSetting = setting;
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, setting);
    } catch {
      // Best-effort storage
    }
  }
}

export function getEffectiveLocale(): Locale {
  if (currentSetting === 'system') {
    return detectSystemLocale();
  }
  return currentSetting;
}

export function setLocale(locale: Locale): void {
  setLanguageSetting(locale);
}

export function t(key: string, params?: Record<string, string | number>): string {
  const locale = getEffectiveLocale();
  let text = locale === 'ja' && jaTranslations[key] ? jaTranslations[key] : key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}
