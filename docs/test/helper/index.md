---
sidebar_position: 3
---

# maxoptics_sdk.helper 

## maxoptics_sdk.helper.json_load(file_path)
## maxoptics_sdk.helper.timed(f: Callable[..., R]) → Callable[..., R]

Add timer prints for wrapped function.



<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">f-Function</td>
  </tr>
  <tr>
    <td class="first-column">Returns</td>
    <td class="second-column">Wrapped function</td>
  </tr>
</table>
<br/>

```py
@timed
def f():
    import time
    time.sleep(1)
f()
[Finished in 0.02 mins]
```

## maxoptics_sdk.helper.with_path(f: Callable[..., R]) → Callable[..., R]

Add path input path keyword-argument for wrapped function. Value is file’s directory path.

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">f-Function</td>
  </tr>
  <tr>
    <td class="first-column">Returns</td>
    <td class="second-column">Wrapped function</td>
  </tr>
</table>
<br/>

```py
@with_path
def f(*, path):
    return path
f()
```