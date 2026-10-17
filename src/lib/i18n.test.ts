import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  getEffectiveLocale,
  getLanguageSetting,
  setLanguageSetting,
  setLocale,
  t,
} from './i18n.svelte';

describe('i18n localization store and translations', () => {
  beforeEach(() => {
    setLanguageSetting('en');
  });

  afterEach(() => {
    setLanguageSetting('en');
  });

  it('returns English key when locale is English', () => {
    setLocale('en');
    expect(t('Settings')).toBe('Settings');
    expect(t('Welcome to OpenQuota')).toBe('Welcome to OpenQuota');
    expect(t('General')).toBe('General');
    expect(t('Show Total Spend')).toBe('Show Total Spend');
  });

  it('returns Japanese translation when locale is Japanese', () => {
    setLocale('ja');
    expect(t('Settings')).toBe('設定');
    expect(t('Welcome to OpenQuota')).toBe('OpenQuotaへようこそ');
    expect(t('General')).toBe('全般');
    expect(t('Show Total Spend')).toBe('総支出を表示');
    expect(t('Customize')).toBe('カスタマイズ');
    expect(t('Language')).toBe('言語');
    expect(t('Appearance')).toBe('外観');
    expect(t('Notifications')).toBe('通知');
    expect(t('Reset All Settings…')).toBe('すべての設定をリセット…');
    expect(t('Session')).toBe('セッション');
    expect(t('Weekly')).toBe('週間');
    expect(t('Claude Weekly')).toBe('Claude 週間');
    expect(t('Usage Trend')).toBe('利用トレンド');
    expect(t('Not started')).toBe('未開始');
    expect(t('dollars')).toBe('ドル');
    expect(t('tokens')).toBe('トークン');
  });

  it('translates quota metrics and pacing strings in Japanese', () => {
    setLocale('ja');
    expect(t('{percent}% left', { percent: 100 })).toBe('残り 100%');
    expect(t('{percent}% used', { percent: 20 })).toBe('使用済み 20%');
    expect(t('~{percent}% left at reset', { percent: 77 })).toBe('リセット時 約77% 残り');
    expect(t('Resets in {time}', { time: '5h' })).toBe('リセットまで 5h');
    expect(t('Resets in {time}', { time: '7d 0h' })).toBe('リセットまで 7d 0h');
    expect(t('Next update in {time}', { time: '5m' })).toBe('次回更新まで 5m');
  });

  it('interpolates parameters correctly in both languages', () => {
    setLocale('en');
    expect(t('Refresh {name}', { name: 'Claude' })).toBe('Refresh Claude');
    expect(t('{count} metrics', { count: 5 })).toBe('5 metrics');

    setLocale('ja');
    expect(t('Refresh {name}', { name: 'Claude' })).toBe('Claudeを更新');
    expect(t('{count} metrics', { count: 5 })).toBe('5個のメトリクス');
  });

  it('falls back to key for untranslated strings in Japanese', () => {
    setLocale('ja');
    expect(t('Some Non Existent Text 12345')).toBe('Some Non Existent Text 12345');
  });

  it('manages language settings correctly', () => {
    setLanguageSetting('ja');
    expect(getLanguageSetting()).toBe('ja');
    expect(getEffectiveLocale()).toBe('ja');

    setLanguageSetting('en');
    expect(getLanguageSetting()).toBe('en');
    expect(getEffectiveLocale()).toBe('en');
  });
});
