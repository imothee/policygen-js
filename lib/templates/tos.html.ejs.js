export default `<div id="policygen-tos" class="<%= css.container_class %>">
  <h1 class="<%= css.h1_class %>"><%= t('tos.title') %></h1>
  <h3 class="<%= css.h3_class %>"><%= t('tos.last_updated', { updated: config.tos_last_updated }) %></h3>

  <!-- Introduction -->
  <section class="<%= css.section_class %>">
    <p class="<%= css.body_class %>">
      <%= t('tos.terms_notice', { entity_name: config.entity_name, entity_website: config.entity_website }) %>
    </p>
    <p class="<%= css.body_class %>">
      <% t('tos.agreement') %>
    </p>
    <p class="<%= css.body_class %>">
      <% t('tos.changes') %>
    </p>
    <% if (!config.under_eighteen && !config.under_thirteen) { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.age_limitation') %>
      </p>
    <% } else if (!config.under_thirteen) { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.thirteen_limitation') %>
      </p>
    <% } else { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.no_age_limitation') %>
      </p>
    <% } %>
  </section>

  <!-- Policy Sections -->
  <section class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.title') %></h1>
    <ol class="<%= css.ol_class %>">
      <% if (config.user_accounts) { %>
        <li><a href="#section-user-accounts" class="<%= css.link_class %>"><%= t('tos.sections.user_accounts') %></a></li>
      <% } %>
      <% if (config.user_content) { %>
        <li><a href="#section-user-content" class="<%= css.link_class %>"><%= t('tos.sections.user_content') %></a></li>
      <% } %>
      <% if (config.purchasable_goods) { %>
        <li><a href="#section-purchasable-goods" class="<%= css.link_class %>"><%= t('tos.sections.purchasable_goods') %></a></li>
      <% } %>
      <% if (config.subscription) { %>
        <li><a href="#section-subscriptions" class="<%= css.link_class %>"><%= t('tos.sections.subscriptions') %></a></li>
      <% } %>
      <li><a href="#section-prohibited-use" class="<%= css.link_class %>"><%= t('tos.sections.prohibited_use') %></a></li>
      <li><a href="#section-termination" class="<%= css.link_class %>"><%= t('tos.sections.termination') %></a></li>
      <li><a href="#section-governing-law" class="<%= css.link_class %>"><%= t('tos.sections.governing_law') %></a></li>
      <li><a href="#section-disputes" class="<%= css.link_class %>"><%= t('tos.sections.disputes') %></a></li>
      <li><a href="#section-availability" class="<%= css.link_class %>"><%= t('tos.sections.availability') %></a></li>
      <% if (config.liability_limitation) { %>
        <li><a href="#section-liability-limitation" class="<%= css.link_class %>"><%= t('tos.sections.liability_limitation') %></a></li>
      <% } %>
      <li><a href="#section-indemnfication" class="<%= css.link_class %>"><%= t('tos.sections.indemnification') %></a></li>
      <li><a href="#section-contact" class="<%= css.link_class %>"><%= t('tos.sections.contact') %></a></li>
    </ol>
  </section>

  <!-- User Accounts -->
  <% if (config.user_accounts) { %>
    <section id="section-user-accounts" class="<%= css.section_class %>">
      <h2 class="<%= css.h2_class %>"><%= t('tos.sections.user_accounts') %></h2>
      <p class="<%= css.body_class %>">
        <%= t('tos.user_accounts.overview') %>
      </p>
      <p class="<%= css.body_class %>">
        <%= t('tos.user_accounts.security') %>
      </p>
      <p class="<%= css.body_class %>">
        <%= t('tos.user_accounts.info') %>
      </p>
    </section>
  <% } %>

  <!-- User Content -->
  <% if (config.user_content) { %>
    <section id="section-user-content" class="<%= css.section_class %>">
      <h2 class="<%= css.h2_class %>"><%= t('tos.sections.user_content') %></h2>
      <p class="<%= css.body_class %>">
        <%= t('tos.user_content.overview') %>
      </p>
      <p class="<%= css.body_class %>">
        <%= t('tos.user_content.removal') %>
      </p>
      <% if (config.user_content_license) { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.user_content.license') %>
        </p>
      <% } %>
    </section>
  <% } %>

  <!-- Purchasable Goods -->
  <% if (config.purchasable_goods) { %>
    <section id="section-purchasable-goods" class="<%= css.section_class %>">
      <h2 class="<%= css.h2_class %>"><%= t('tos.sections.purchasable_goods') %></h2>
      <p class="<%= css.body_class %>">
        <%= t('tos.purchasable_goods.overview') %>
      </p>
      <p class="<%= css.body_class %>">
        <%= t('tos.purchasable_goods.payment') %>
      </p>
      <p class="<%= css.body_class %>">
        <%= t('tos.purchasable_goods.purchases') %>
      </p>
    </section>
  <% } %>

  <!-- Subscriptions -->
  <% if (config.subscription) { %>
    <section id="section-subscriptions" class="<%= css.section_class %>">
      <h2 class="<%= css.h2_class %>"><%= t('tos.sections.subscriptions') %></h2>
      <p class="<%= css.body_class %>">
        <%= t('tos.subscriptions.overview') %>
      </p>
      <% if (config.free_trial) { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.subscriptions.free_trial') %>
        </p>
      <% } %>
      <% if (config.auto_renew) { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.subscriptions.auto_renew') %>
        </p>
      <% } %>
      <% if (config.refund_policy === 'none') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.subscriptions.refund_none') %>
        </p>
      <% } else if (config.refund_policy === 'full') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.subscriptions.refund_full') %>
        </p>
      <% } else if (config.refund_policy === 'prorata') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.subscriptions.refund_pro_rata') %>
        </p>
      <% } %>
    </section>
  <% } %>

  <!-- Prohibited Use -->
  <section id="section-prohibited-use" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.prohibited_use') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.prohibited_use.overview') %>
    </p>
    <ul class="<%= css.ul_class %>">
      <% config.prohibited_uses.forEach(function(use) { %>
        <li class="<%= css.body_class %>">
          <%= t(\`tos.prohibited_use.\${use}\`, use) %>
        </li>
      <% }); %>
    </ul>
  </section>

  <!-- Termination -->
  <section id="section-termination" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.termination') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.termination.overview') %>
    </p>
    <p class="<%= css.body_class %>">
      <%= t('tos.termination.effect') %>
    </p>
    <p class="<%= css.body_class %>">
      <%= t('tos.termination.severability') %>
    </p>
    <p class="<%= css.body_class %>">
      <%= t('tos.termination.waiver') %>
    </p>
  </section>

  <!-- Governing Law -->
  <section id="section-governing-law" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.governing_law') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.governing_law.overview', { governing_law: config.governing_law }) %>
    </p>
  </section>

  <!-- Disputes -->
  <section id="section-disputes" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.disputes') %></h2>
    <% if (config.mediation) { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.disputes.mediation') %>
      </p>
    <% } %>
    <% if (config.dispute_resolution === 'arbitration') { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.disputes.arbitration') %>
      </p>
    <% } %>
    <% if (config.dispute_resolution === 'litigation') { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.disputes.litigation') %>
      </p>
    <% } %>
  </section>

  <!-- Availability -->
  <section id="section-availability" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.availability') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.availability.as_is') %>
    </p>
    <p class="<%= css.body_class %>">
      <%= t('tos.availability.maintenance') %>
    </p>
    <p class="<%= css.body_class %>">
      <%= t('tos.availability.warranty') %>
    </p>
    <% if (config.service_sla)  { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.availability.sla') %>
      </p>
      <% if (config.service_sla_custom) { %>
        <p class="<%= css.body_class %>">
          <%= config.service_sla_custom %>
        </p>
      <% } else { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.availability.sla_details', { amount: config.service_sla_amount, timeframe: config.service_sla_timeframe }) %>
        </p>
      <% } %>
      <% if (config.service_sla_refund) { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.availability.sla_refund', { refund: config.service_sla_refund_type }) %>
        </p>
      <% } %>
    <% } %>
  </section>

  <!-- Liability Limitation -->
  <% if (config.liability_limitation) { %>
    <section id="section-liability-limitation" class="<%= css.section_class %>">
      <h2 class="<%= css.h2_class %>"><%= t('tos.sections.liability_limitation') %></h2>
      <p class="<%= css.body_class %>">
        <%= t('tos.liability_limitation.overview') %>
      </p>
      <% if (config.liability_limitation_type === 'amount_paid') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.liability_limitation.amount_paid', { timeframe: config.liability_limitation_timeframe }) %>
        </p>
      <% } else if (config.liability_limitation_type === 'amount') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.liability_limitation.amount', { amount: config.liability_limitation_amount }) %>
        </p>
      <% } else if (config.liability_limitation_type === 'min_amount_paid_or_amount') { %>
        <p class="<%= css.body_class %>">
          <%= t('tos.liability_limitation.min_amount_paid_or_amount', { timeframe: config.liability_limitation_timeframe, amount: config.liability_limitation_amount }) %>
        </p>
      <% } %>
      <p class="<%= css.body_class %>">
        <%= t('tos.liability_limitation.exceptions') %>
      </p>
    </section>
  <% } %>

  <!-- Indemnification -->
  <section id="section-indemnification" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.indemnification') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.indemnification.overview') %>
    </p>
  </section>

  <!-- Contact -->
  <section id="section-contact" class="<%= css.section_class %>">
    <h2 class="<%= css.h2_class %>"><%= t('tos.sections.contact') %></h2>
    <p class="<%= css.body_class %>">
      <%= t('tos.contact.text', { support_email: config.support_email, class: css.link_class }) %>
    </p>
    <p class="<%= css.body_class %>">
      <%= config.entity_name %>
    </p>
    <% if (config.entity_address) { %>
      <p class="<%= css.body_class %>">
        <%= t('tos.contact.address', { entity_address: config.entity_address }) %>
      </p>
    <% } %>
  </section>
</div>`;
