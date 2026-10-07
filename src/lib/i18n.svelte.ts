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
  '日本語': '日本語',
  'Always Show Pacing Projections': 'ペース予測を常に表示',
  'Show projections even when usage is healthy.':
    '利用が適正な範囲でも予測を表示します。',
  'Almost out of quota': 'クォータ残量低下',
  'Cutting it close': '期限切れ間近',
  'Will run out': 'クォータ枯渇予測',
  'Log Level': 'ログレベル',
  Warn: '警告',
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
  'Open System Settings to allow notifications.':
    'システム設定を開いて通知を許可してください。',

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
  'Display Name': '表示名',
  'Display name': '表示名',
  'Restore default': '初期値に戻す',
  'Rename {name} for this device. Blank restores the default name.':
    'このデバイスでの{name}の表示名を変更します。空欄にするとデフォルト名に戻ります。',

  // API Key section
  'API Key': 'APIキー',
  'Enter API key': 'APIキーを入力',
  'From Your Environment': '環境変数から読み込み済み',
  'From Config File': '設定ファイルから読み込み済み',
  'Saved securely': '安全に保存済み',
  'Custom Key': 'カスタムキー',
  'Remove Saved Key': '保存済みキーを削除',
  'Remove saved API key for {name}?': '{name}の保存済みAPIキーを削除しますか？',
  'This will remove the key from secure storage.': '安全なストレージからキーが削除されます。',
  'Reveal API key': 'APIキーを表示',
  'Hide API key': 'APIキーを隠す',

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
  'Reset applied.': 'リセットを適用しました。',
  'Nothing to reset.': 'リセット対象がありません。',
  'No reset credit available.': '利用可能なリセットクレジットがありません。',
  'Reset request failed.': 'リセット要求に失敗しました。',
  'Expiry times unavailable': '有効期限は利用できません',
  'Expiring soon': 'まもなく期限切れ',

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
  'Leave the name empty to go back to the default.':
    '空欄にするとデフォルトの名前に戻ります。',
  'We set you up with the AI tools found on your computer. Add or hide providers any time.':
    'お使いのPCで検出されたAIツールの設定を完了しました。プロバイダーの追加・非表示はいつでも行えます。',
  'Return to Tray Popup': 'トレイポップアップに戻す',
  'Keep Window Open': 'ウィンドウを開いたままにする',
  'Reset {name}': '{name}をリセット',
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
