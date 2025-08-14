# OpenAI SDK Compatibility

> NeosantaraAI provides a compatibility layer that enables you to use the OpenAI SDK to interact with the NeosantaraAI API. With a few code changes, you can quickly evaluate NeosantaraAI model capabilities.

<Note>
This compatibility layer is primarily intended to test and compare model capabilities, and is not considered a long-term or production-ready solution for most use cases. While we do intend to keep it fully functional and not make breaking changes, our priority is the reliability and effectiveness of the [NeosantaraAI API](/api-reference/introduction).

  For more information on known compatibility limitations, see [Important OpenAI compatibility limitations](#important-openai-compatibility-limitations).

  If you encounter any issues with the OpenAI SDK compatibility feature, please let us know at help@neosantara.xyz.
</Note>

<Tip>
  For the best experience and access to the NeosantaraAI API's full feature set, we recommend using our native API (check the [getting started guide](/api-reference/getting-started)).
</Tip>

## Getting Started with the OpenAI SDK

To use the OpenAI SDK compatibility feature, you'll need to:

1.  Use an official OpenAI SDK.
2.  Change the following:
    * Update your base URL to point to NeosantaraAI's API.
    * Replace your API key with a [NeosantaraAI API key](https://app.neosantara.xyz/dashboard).
    * Update your model name to use a [NeosantaraAI model](/v1/models).
3.  Review the documentation below for what features are supported.

### Quick Start Example

<CodeGroup>
  ```Python Python
  from openai import OpenAI
 
  client = OpenAI(
      api_key="NEOSANTARA_API_KEY",  # Your NeosantaraAI API key
      base_url="[https://api.neosantara.xyz/v1/](https://api.neosantara.xyz/v1/)"  # NeosantaraAI's API endpoint
  )

  response = client.chat.completions.create(
      model="nusantara-base", # NeosantaraAI model name
      messages=[
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Who are you?"}
      ],
  )
 
  print(response.choices[0].message.content)
  ```

  ```TypeScript TypeScript
  import OpenAI from 'openai';
  
  const openai = new OpenAI({
      apiKey: "NEOSANTARA_API_KEY",   // Your NeosantaraAI API key
      baseURL: "[https://api.neosantara.xyz/v1/](https://api.neosantara.xyz/v1/)",  // NeosantaraAI API endpoint
  });
  
  const response = await openai.chat.completions.create({
      messages: [
          { role: "user", content: "Who are you?" }
      ],
      model: "nusantara-base", // NeosantaraAI model name
  });
  
  console.log(response.choices[0].message.content);
  ```
</CodeGroup>

---

## Feature Support and Limitations

#### Key Differences in Behavior

While we aim for maximum compatibility, there are some differences to be aware of:

* The `strict` parameter for function calling is ignored, which means the tool use JSON is not guaranteed to follow the supplied schema.
* Audio input is not supported; it will simply be ignored and stripped from input.
* Prompt caching is not supported.
* System messages are prepended to the first user message for some models, or passed as a system role to others.

Most unsupported fields are silently ignored rather than producing errors. These are all documented below.

#### Output Quality Considerations

If you’ve done a lot of tweaking to your prompt, it’s likely to be well-tuned to OpenAI specifically.

#### System / Developer Message Hoisting

Most of the inputs to the OpenAI SDK clearly map directly to NeosantaraAI’s API parameters, but one distinct difference is the handling of system prompts. System messages are handled by prepending their content to the first user message for some underlying models, or passed as a system role to others.

#### Advanced Reasoning Support

NeosantaraAI supports enhanced reasoning capabilities through a unified `reasoning` parameter, inspired by modern AI API standards. This allows you to control the model's "thinking" process for more complex tasks.

<Info>
The legacy OpenAI thinking parameter is not supported. Please use our unified reasoning object for better control and cross-provider compatibility.
</Info>

You can activate this feature by adding the `reasoning` object to your request body via the `extra_body` parameter.

<CodeGroup>
  ```Python Python
  from openai import OpenAI
 
  client = OpenAI(
      api_key="NEOSANTARA_API_KEY",
      base_url="[https://api.neosantara.xyz/v1/](https://api.neosantara.xyz/v1/)"
  )
 
  response = client.chat.completions.create(
      model="nusantara-base",
      messages=[{"role": "user", "content": "Analyze the pros and cons of IKN."}],
      extra_body={
        "reasoning": {
          "effort": "medium" # Reasoning level: low, medium, high
        }
      },
      stream=True
  )
 
  # The streaming response will contain <think> and <answer> tags
  for chunk in response:
    print(chunk.choices[0].delta.content, end="")
  ```

  ```TypeScript TypeScript
  import OpenAI from 'openai';
  
  const openai = new OpenAI({
      apiKey: "NEOSANTARA_API_KEY",
      baseURL: "[https://api.neosantara.xyz/v1/](https://api.neosantara.xyz/v1/)"
  });
  
  const response = await openai.chat.completions.create({
      model: 'nusantara-base',
      messages: [{ role: 'user', content: 'Analyze the pros and cons of nuclear energy.' }],
      extra_body: {
        reasoning: { effort: 'medium' }
      }
  });
  
  console.log(response.choices[0].message.content);
  ```
</CodeGroup>

---

## Rate Limits

Rate limits follow NeosantaraAI's [standard limits](/about/rate-limits).

## Detailed OpenAI Compatible API Support

### Request Fields

#### Simple Fields

| Field | Support Status |
|:---|:---|
| `model` | Use NeosantaraAI model names. |
| `max_tokens` | Fully supported. |
| `max_completion_tokens` | Ignored (use `max_tokens` instead). |
| `stream` | Fully supported. |
| `stream_options` | Ignored. |
| `top_p` | Fully supported. |
| `parallel_tool_calls` | Supported via the `tools` array. |
| `stop` | Fully supported. |
| `temperature` | Fully supported. |
| `n` | Must be exactly 1. |
| `logprobs` | Ignored. |
| `metadata` | Ignored. |
| `response_format` | Fully supported (`text`, `json_object`). |
| `prediction` | Ignored. |
| `presence_penalty` | Fully supported. |
| `frequency_penalty` | Fully supported. |
| `seed` | Ignored. |
| `service_tier` | Ignored. |
| `audio` | Ignored. |
| `logit_bias` | Ignored. |
| `store` | Ignored. |
| `user` | Ignored. |
| `modalities` | Ignored. |
| `top_logprobs` | Ignored. |
| `reasoning` | Supported. NeosantaraAI's enhanced reasoning feature. |

### `tools` / `functions` Fields

NeosantaraAI supports OpenAI's `tools` parameter for function calling. The legacy `functions` parameter is also supported for backward compatibility and is automatically converted to the `tools` format.

<Accordion title="View Parameter Support Details">
  <Tabs>
    <Tab title="Tools">
      Fields for the `tools[n].function` object:

      | Field | Support Status | Notes |
|:---|:---|:---|
      | `name` | **Supported** | The name of the function to be called. |
      | `description` | **Supported** | A description of what the function does. |
      | `parameters` | **Supported** | The parameters the function accepts, in JSON Schema format. |
      | `strict` | Ignored | The model may not strictly adhere to the schema. |

    </Tab>
    <Tab title="Functions (Legacy)">
      Fields for the legacy `functions[n]` object:

      <Info>
        OpenAI has deprecated the `functions` field in favor of `tools`. We recommend updating your code to use the `tools` parameter for future compatibility.
      </Info>

      | Field | Support Status | Notes |
|:---|:---|:---|
      | `name` | **Supported** | The name of the function to be called. |
      | `description` | **Supported** | A description of what the function does. |
      | `parameters` | **Supported** | The parameters the function accepts, in JSON Schema format. |
      | `strict` | Ignored | The model may not strictly adhere to the schema. |

    </Tab>
  </Tabs>
</Accordion>

### `messages` Array Fields

The `messages` array follows the standard OpenAI structure. Below is a detailed breakdown of support for each message role and its fields.

<Accordion title="View Message Field Support Details">
  <Tabs>
    <Tab title="System Role">
      Fields for `messages[n]` where `role: "system"`:

      <Info>
        For some underlying models that do not natively support a `system` role, the content is automatically prepended to the first user message to preserve context.
      </Info>

      | Field | Support Status |
|:---|:---|
      | `content` | **Supported** |
      | `name` | Ignored |

    </Tab>
    <Tab title="User Role">
      Fields for `messages[n]` where `role: "user"`:

      | Field | Variant | Sub-field | Support Status |
|:---|:---|:---|:---|
      | `content` | `string` | | **Supported** |
      | | `array`, `type: "text"` | | **Supported** |
      | | `array`, `type: "image_url"`| `url` | **Supported** (for vision-capable models) |
      | | | `detail` | Ignored |
      | `name` | | | Ignored |

    </Tab>
    <Tab title="Assistant Role">
      Fields for `messages[n]` where `role: "assistant"`:

      | Field | Variant | Status Dukungan |
|:---|:---|:---|
      | `content` | `string` or `null` | **Supported** |
      | `tool_calls` | | **Supported** |
      | `function_call` | (Legacy) | **Supported** (converted to `tool_calls`) |
      | `name` | | Ignored |
      | `refusal` | | Ignored |

    </Tab>
    <Tab title="Tool Role">
      Fields for `messages[n]` where `role: "tool"`:

      | Field | Status Dukungan |
|:---|:---|
      | `content` | **Supported** |
      | `tool_call_id` | **Supported** |
      | `name` | Deprecated (inferred from `tool_call_id`) |

    </Tab>
    <Tab title="Function Role (Legacy)">
      Fields for `messages[n]` where `role: "function"`:

      <Info>
        The `function` role is deprecated by OpenAI. NeosantaraAI automatically converts it to a `tool` role for compatibility, but we recommend updating to the `tool` role structure.
      </Info>

      | Field | Status Dukungan |
|:---|:---|
      | `content` | **Supported** |
      | `name` | **Supported** (used to map to the correct tool call) |
    </Tab>
  </Tabs>
</Accordion>

### Error Message Compatibility

The compatibility layer maintains consistent error formats with the OpenAI API. However, the detailed error messages will not be equivalent. We recommend only using the error messages for logging and debugging.

### Header Compatibility

| Header | Status Dukungan |
|:---|:---|
| `x-ratelimit-limit-requests` | Fully supported |
| `x-ratelimit-limit-tokens` | Fully supported |
| `x-ratelimit-remaining-requests` | Fully supported |
| `x-ratelimit-remaining-tokens` | Fully supported |
| `x-ratelimit-reset-requests` | Fully supported |
| `x-ratelimit-reset-tokens` | Fully supported |
| `retry-after` | Not supported |
| `request-id` | Not supported |
| `openai-version` | Not supported |
| `authorization` | Fully supported |
| `openai-processing-ms` | Not supported |