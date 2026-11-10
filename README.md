# unvibecode-url-redaction-repro

Minimal reproducer for an UnvibeCode (shipreadyv2) credential-screening gap:
**API/webhook secrets embedded in a URL _path_ (Slack / Discord / Telegram) are
not redacted**, so they are transmitted to the hosted analysis service and
written verbatim into the downloadable `*-repository-context.zip`.

All credential strings in `notify.js` are **synthetic / fake** (format-valid,
not real secrets), included only to reproduce the tool's behavior.

## Reproduce
```
python -m pip install --upgrade unvibecode
python -m unvibecode review --repository "<path to this repo>"
```
Then open the generated `*-repository-context.zip` -> `chunks.jsonl`: the webhook
URLs from `notify.js` appear unchanged (not `<REDACTED_...>`).

Deterministic, no network:
```
python -c "from shipreadyv2.redaction import redact_text; print(redact_text(open('notify.js').read()))"
```
