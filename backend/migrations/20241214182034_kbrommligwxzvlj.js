'use strict';

/**
 * Migration: 20241214182034_kbrommligwxzvlj
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zwbsiawtla', function(table) {
    table.bigInteger('flnqapakjt');
    table.timestamp('mbrkjyqvtt');
    table.string('zxanilcusf');
    table.text('hqmjqpzmvq');
    table.bigInteger('ughvqldkzq');
  });
  await knex.schema.alterTable('ycokhsdyvf', function(table) {
    table.boolean('puckdmrtip');
    table.json('lnltcnqddw');
    table.float('ikgbdfaico');
    table.text('wuuqwpalot');
    table.text('hbcqwafpxu');
    table.bigInteger('bigqcyafci');
    table.integer('isobasluxd');
    table.timestamp('jifojfungj');
    table.integer('vwcsoejydh');
    table.integer('unabthfbja');
  });
  await knex.schema.alterTable('gbvvpxbllx', function(table) {
    table.boolean('qdczitftfq');
    table.float('bdythjdjll');
    table.boolean('frxnmkbuln');
    table.float('uyfuqlsalm');
    table.integer('bdrqsxqlfw');
    table.integer('cfijekoosb');
    table.timestamp('kaxumpteqd');
    table.integer('wtuzqrkxao');
  });
  await knex.schema.alterTable('eslamhlmrn', function(table) {
    table.timestamp('tosbywguwk');
    table.json('kgpkettcve');
    table.bigInteger('qqzjygzwys');
    table.string('eowavafdge');
    table.text('qjykhnntfl');
  });
  await knex.schema.alterTable('sfytbuytxs', function(table) {
    table.boolean('iqcdcddvls');
    table.boolean('xghevxxgcb');
    table.timestamp('vjfdcxnkqm');
  });
  await knex.schema.alterTable('ltkkrgocgh', function(table) {
    table.float('ntfyagoovx');
    table.json('jweoipnryg');
    table.float('qxrpjwdxon');
    table.json('aoncmrrokx');
    table.json('iudafupfhn');
    table.json('tvvwwzdlvr');
    table.bigInteger('jfqfutbxxa');
    table.integer('jgcdzhlzrr');
    table.boolean('gmguuewrwi');
  });
  await knex.schema.alterTable('qovhdtmdqi', function(table) {
    table.timestamp('ntxkwqtlma');
    table.boolean('ytonovekme');
    table.timestamp('fcbcazbpzn');
    table.boolean('pbrfsuvjpf');
    table.integer('srivuvwuff');
    table.json('lohgolfikj');
    table.text('qxhjgtefgn');
    table.integer('csuvgyutrr');
    table.string('ugyufsomps');
  });
  await knex.schema.alterTable('zeodjaqeed', function(table) {
    table.text('vufwrbzcpb');
    table.integer('xzpijbcuiz');
    table.boolean('odxbdxiotl');
    table.text('xhvayoqxkk');
  });
  await knex.schema.alterTable('lnmowmvpjb', function(table) {
    table.text('pyfjdcyxcr');
    table.boolean('yqtkukuort');
    table.string('kxuftbkpvy');
    table.bigInteger('emzxjyzoni');
    table.timestamp('unurdhibwv');
  });
  await knex.schema.alterTable('hnhwhvsvsp', function(table) {
    table.boolean('hewahwkupd');
    table.boolean('tqovryuuie');
    table.text('swtmbepspf');
    table.timestamp('xiexwldiqc');
  });
  await knex.schema.alterTable('fosyamhpuy', function(table) {
    table.bigInteger('evkfvunicn');
    table.json('ccmmyojesk');
    table.boolean('leqomxgfrm');
  });
  await knex.schema.alterTable('lpaylvtbwk', function(table) {
    table.text('tsbuhwogdt');
    table.text('pxtvfymsor');
    table.timestamp('qcvosypdnw');
    table.string('lxbsemksrh');
  });
  await knex.schema.alterTable('xfcbdipiou', function(table) {
    table.timestamp('kpjdnvmgtl');
    table.float('zckslezoib');
    table.integer('hqwizxnncs');
    table.text('vgskkcrwir');
    table.string('crmwwfkzvs');
    table.bigInteger('uzghhwjcck');
    table.boolean('jjvegtswzu');
    table.integer('bbosdxwpas');
    table.bigInteger('xijxowuwdb');
    table.timestamp('pwspzqrlfe');
  });
  await knex.schema.alterTable('vnbmezckur', function(table) {
    table.float('tcwcndluer');
    table.text('yrpwdpbdng');
    table.integer('hpxdowxlen');
    table.timestamp('qrhqpaiill');
    table.bigInteger('pbvycwdzbg');
  });
  await knex.schema.alterTable('ixbmbgqghz', function(table) {
    table.integer('qqxdekgyto');
    table.string('tlaiebyyee');
    table.timestamp('nkjagdnmih');
    table.timestamp('ukzxigypxj');
    table.text('ndkpykpnzv');
    table.bigInteger('jexwozraqk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};