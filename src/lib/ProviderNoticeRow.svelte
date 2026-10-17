<script lang="ts">
  import Icon from './Icon.svelte';
  import { getEffectiveLocale, t } from './i18n.svelte';
  import type { ProviderNotice } from './types';

  interface Props {
    notice: ProviderNotice;
  }

  let { notice }: Props = $props();

  function formatNotice(message: string): string {
    const stalePrefix = 'Showing the last successful limits · ';
    if (message.startsWith(stalePrefix)) {
      const rest = message.slice(stalePrefix.length);
      return t('Showing the last successful limits · {retry}', { retry: formatNotice(rest) });
    }
    const retryPrefix = 'Retrying in about ';
    if (message.startsWith(retryPrefix)) {
      if (getEffectiveLocale() === 'ja') {
        const time = message
          .slice(retryPrefix.length)
          .replace(/minutes?/, '分')
          .replace(/seconds?/, '秒')
          .replace(/hours?/, '時間');
        return `${time}後に再試行`;
      }
      return message;
    }
    if (message === 'Ready to retry') {
      return t('Ready to retry');
    }
    return t(message);
  }
</script>

<div
  class="provider-notice-row provider-notice-row--{notice.tone}"
  role={notice.tone === 'warning' ? 'status' : undefined}
>
  <span class="provider-notice-icon"><Icon name="warning" size={12} strokeWidth={2} /></span>
  <span class="provider-notice-copy"
    ><strong>{t(notice.title)}</strong><small>{formatNotice(notice.message)}</small></span
  >
</div>

<style>
  :global {
    .provider-notice-row {
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 6px 8px;
      padding: 8px 9px;
      border: 1px solid color-mix(in srgb, var(--warning) 18%, transparent);
      border-radius: 9px;
      color: var(--warning);
      background: color-mix(in srgb, var(--warning-bg) 72%, transparent);
    }

    .provider-notice-icon {
      display: grid;
      width: 24px;
      height: 24px;
      flex: 0 0 24px;
      border-radius: 7px;
      background: color-mix(in srgb, var(--warning) 12%, transparent);
      place-items: center;
    }

    .provider-notice-copy {
      display: grid;
      min-width: 0;
      gap: 1px;
    }

    .provider-notice-copy strong {
      color: var(--text);
      font-size: 11px;
      font-weight: 650;
      line-height: 14px;
    }

    .provider-notice-copy small {
      color: var(--secondary);
      font-size: 10px;
      line-height: 13px;
      overflow-wrap: anywhere;
    }

    :root[data-density='compact'] .provider-notice-row {
      margin: 4px 8px;
      padding: 5px 8px;
    }

    :root[data-density='compact'] .provider-notice-icon {
      width: 20px;
      height: 20px;
      flex-basis: 20px;
    }
  }
</style>
