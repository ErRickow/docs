---
title:
---

To meet the demand for using the Anthropic API ecosystem, our API has added support for the Anthropic API format. With simple configuration, you can integrate the capabilities of DeepSeek into the Anthropic API ecosystem.

## Use Neosantara in Claude Code

<Steps>
  <Step title="Install Claude Code">
    ```bash icon="terminal"
    npm i -g @anthropic-ai/claude-code
    ```
  </Step>
  <Step title="Config Environment Variables">
    ```bash icon="terminal"
    export ANTHROPIC_BASE_URL=https://api.neosantara.xyz/anthropic
    export ANTHROPIC_AUTH_TOKEN=${YOUR_API_KEY}
    export API_TIMEOUT_MS=600000
    export ANTHROPIC_MODEL=deepseek-r1-llama-70b
    export ANTHROPIC_SMALL_FAST_MODEL=nusantara-base
    export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
    ```
    <Info>The `API_TIMEOUT_MS` parameter is configured to prevent excessively long outputs that could cause the Claude Code client to time out. Here, we set the timeout duration to 10 minutes.</Info>
  </Step>
  <Step title="Run the Claude Code">
    ```bash icon="terminal"
    cd my-project
    claude
    ```
    </Step>
</Steps>

